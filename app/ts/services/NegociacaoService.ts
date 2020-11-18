import { Negociacao, NegociacaoParcial } from '../models/index';

export class NegociacaoService {

	listarNegociacoes(handler: HandlerFunction): Promise<Negociacao[]> {

		return fetch('http://localhost:8080/dados')
			.then(response => {
				return handler(response);
			})
			.then(response => {
				return response.json();
			})
			.then( (dados: NegociacaoParcial[]) => {
				return dados
					.map(dado => { return new Negociacao(new Date(), dado.vezes, dado.montante)})
			})
			.catch(error => {
				console.log(error)
				throw new Error('Não foi possível importar as negociações! Tente mais tarde.')
			})
	}
}

export interface HandlerFunction {

	//qualquer função deve receber uma response e devoler uma response
	(response: Response): Response;
}