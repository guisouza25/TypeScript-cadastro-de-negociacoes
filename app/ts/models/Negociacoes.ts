import { Negociacao } from './Negociacao';

export class Negociacoes {
	      //_negociacoes:Negociacao[] array de negociacao
	private _negociacoes: Array<Negociacao> = [];

	//encapsular a lista de negociacoes para que seja
	//possivel apenas incluir e nao remover
	
	adiciona(negociacao: Negociacao): void {
		this._negociacoes.push(negociacao);
	}

	getNegociacoes(): Array<Negociacao> {

		//passando a lista de negociacoes para um novo array, preservando
		//o array original(_negociacoes)

		return ([] as Array<Negociacao>).concat(this._negociacoes);
	}
}