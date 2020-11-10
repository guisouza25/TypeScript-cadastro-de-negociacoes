export class Negociacao {

	constructor(readonly data: Date, readonly quantidade: number, readonly valor: number) {
		
		//undeline - propriedades nao podem ser alteradas fora dos metodos

		if(!data) {
			throw new Error('data deve ser preenchida')
		}
	}

	get volume() {
		return (this.quantidade * this.valor)
	}
}