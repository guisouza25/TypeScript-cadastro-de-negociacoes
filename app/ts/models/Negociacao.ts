import { MeuObjeto } from './Interfaces/MeuObjeto';

export class Negociacao implements MeuObjeto<Negociacao> {

	constructor(readonly data: Date, readonly quantidade: number, readonly valor: number) {
		
		//undeline - propriedades nao podem ser alteradas fora dos metodos

		if(!data) {
			throw new Error('data deve ser preenchida')
		}
	}

	get volume() {
		return (this.quantidade * this.valor)
	}

	paraTexto(): void {
		console.log(
			`Data: ${this.data}
			Quantidade: ${this.quantidade}, 
			Valor: ${this.valor}, 
			Volume: ${this.volume}`
		)
	}

	isEqual(negociacao: Negociacao): boolean {

        return this.data.getDate() == negociacao.data.getDate()
            && this.data.getMonth() == negociacao.data.getMonth()
            && this.data.getFullYear() == negociacao.data.getFullYear();
    }
}