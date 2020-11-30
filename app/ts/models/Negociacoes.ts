import { Negociacao, MeuObjeto} from './index';

export class Negociacoes implements MeuObjeto<Negociacoes> {
	      //_negociacoes:Negociacao[] array de negociacao
	private _negociacoes: Array<Negociacao> = [];

	//encapsular a lista de negociacoes para que seja
	//possivel apenas incluir e nao remover
	
	adiciona(negociacao: Negociacao): void {
		this._negociacoes.push(negociacao);
	}

	getNegociacoes(): Array<Negociacao> {

		//passando a lista de negociacoes para um novo array, preservando
		//o array original(_negociacoes) - imutabilidade
		let novoArray = Object.assign([], this._negociacoes)
		return novoArray;

		//return ([] as Array<Negociacao>).concat(this._negociacoes);
	}

	paraTexto(): void {
		console.log(JSON.stringify(this._negociacoes))
	}

	isEqual(negociacoes: Negociacoes) {

		return JSON.stringify(this._negociacoes) == JSON.stringify(negociacoes.getNegociacoes());
	}
}