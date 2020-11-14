import { NegociacoesView, MensagemView } from '../views/index';
import { Negociacoes, Negociacao, NegociacaoParcial } from '../models/index';
import { domInject, throttle } from '../helpers/decorators/index';

let timer = 0;

export class NegociacaoController {

	@domInject('#data')
	private _inputData: JQuery;

	@domInject('#quantidade')
	private _inputQuantidade: JQuery;
	
	@domInject('#valor')
	private _inputValor: JQuery;
	private _negociacoes = new Negociacoes();
	private _negociacoesView = new NegociacoesView('#negociacoesView', true);
	private _mensagemView = new MensagemView('#mensagemView', true);



	constructor() {
		this._negociacoesView.update(this._negociacoes);
	}

	@throttle(500)
	adiciona() { 

		let data = new Date(this._inputData.val().replace(/-/g, ','));

		 //data.getDay() == 0 || data.getDay() == 6
		if(data.getDay() == DiaDaSemana.Domingo || data.getDay() == DiaDaSemana.Sabado) {
			this._mensagemView.update('Negociações somente em dias úteis!');
			return;
		}

		const negociacao = new Negociacao(
			data,
			parseInt(this._inputQuantidade.val()),
			parseFloat(this._inputValor.val())
		);
		
		this._negociacoes.adiciona(negociacao);

		this._negociacoes.getNegociacoes().length = 0

		// this._negociacoes.getNegociacoes().forEach(negociacao => {
		// 	console.log(negociacao.data);
		// 	console.log(negociacao.quantidade);
		// 	console.log(negociacao.valor)
		// });

		this._negociacoesView.update(this._negociacoes)
		this._mensagemView.update('Negociação adicionada com sucesso!');
	}
	
	@throttle(500)
	importaDados() {
	
		function isOk(response: Response) {
			if(response.ok) {
				return response
			} else {
				throw new Error(response.statusText)
			}
		}

	
		fetch('http://localhost:8080/dados')
			// .then(function(response) {
			// 	console.log(response.json())
			// })
			.then(response => {
				return isOk(response)
			})
			.then(response => {
				return response.json()
			})
			.then((dados: Array<NegociacaoParcial>) => {
				dados
					.map(dado => { return new Negociacao(new Date(), dado.vezes, dado.montante)})
					.forEach(negociacao => { return this._negociacoes.adiciona(negociacao) })
				this._negociacoesView.update(this._negociacoes)
			})
			.catch(error => {
				console.log(error.message)
			})
	
	}	
}

enum DiaDaSemana {

	Domingo,
	Segunda,
	Terca,
	Quarta,
	Quinta,
	Sexta,
	Sabado

}

enum Test {
    a = 1,
    b,
    c
}