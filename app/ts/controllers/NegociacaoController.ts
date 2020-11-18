import { NegociacoesView, MensagemView } from '../views/index';
import { Negociacoes, Negociacao, NegociacaoParcial } from '../models/index';
import { domInject, throttle } from '../helpers/decorators/index';
import { HandlerFunction, NegociacaoService } from '../services/NegociacaoService';
import { imprime } from '../helpers/index';


export class NegociacaoController {

	@domInject('#data')
	private _inputData: JQuery;

	@domInject('#quantidade')
	private _inputQuantidade: JQuery;
	
	@domInject('#valor')
	private _inputValor: JQuery;

	private _negociacoes = new Negociacoes();
	private _negociacoesView = new NegociacoesView('#negociacoesView', true);
	private _mensagemView = new MensagemView('#mensagemView');

	private _negociacaoService = new NegociacaoService();

	constructor() {
		this._negociacoesView.update(this._negociacoes);
	}

	@throttle(500)
	adiciona() { 

		let data = new Date(this._inputData.val().replace(/-/g, ','));

		 //data.getDay() == 0 || data.getDay() == 6
		if(data.getDay() == DiaDaSemana.Domingo || data.getDay() == DiaDaSemana.Sabado) {
			this._mensagemView.update('Negociações somente em dias úteis!', 'danger');
			return;
		}

		const negociacao = new Negociacao(
			data,
			parseInt(this._inputQuantidade.val()),
			parseFloat(this._inputValor.val())
		);
		
		this._negociacoes.adiciona(negociacao);
		
		imprime(negociacao, this._negociacoes);

		this._negociacoes.getNegociacoes().length = 0

		// this._negociacoes.getNegociacoes().forEach(negociacao => {
		// 	console.log(negociacao.data);
		// 	console.log(negociacao.quantidade);
		// 	console.log(negociacao.valor)
		// });

		this._negociacoesView.update(this._negociacoes)
		this._mensagemView.update('Negociação adicionada com sucesso!', 'success');
	}
	
	@throttle(500)
	async importaDados() {
		
		try {
			/**
			 * await - espera a promisse ser processada e suspende a execução de
			 * importaDados() e a aplicação continua rodando
			 */
			const negociacoes = await this._negociacaoService
			.listarNegociacoes(response => {
				if(response.ok) {
					return response
				} else {
					throw new Error('response.statusText')
				}
			})
		
			const negociacoesJaImportadas = this._negociacoes.getNegociacoes();

			negociacoes
				.filter(negociacao => 
					!negociacoesJaImportadas.some(jaImportada => 
						negociacao.isEqual(jaImportada)))

			negociacoes.forEach(negociacao => { this._negociacoes.adiciona(negociacao) });
			this._negociacoesView.update(this._negociacoes)

		} catch (error) {

			this._mensagemView.update(error.message, 'danger')
		}	
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