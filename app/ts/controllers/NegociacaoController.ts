import { NegociacoesView, MensagemView } from '../views/index';
import { Negociacoes, Negociacao } from '../models/index';

export class NegociacaoController {

	private _inputData: JQuery;
	private _inputQuantidade: JQuery;
	private _inputValor: JQuery;
	private _negociacoes = new Negociacoes();
	private _negociacoesView = new NegociacoesView('#negociacoesView', true);
	private _mensagemView = new MensagemView('#mensagemView', true);

	constructor() {

		this._inputData = $('#data');
		this._inputQuantidade = $('#quantidade');
		this._inputValor = $('#valor');
		this._negociacoesView.update(this._negociacoes);
	}


	adiciona(event: Event) { 

		event.preventDefault();

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