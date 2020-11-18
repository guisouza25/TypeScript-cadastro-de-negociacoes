import { View } from './View';

export class MensagemView {
	
	private _elemento: JQuery;

	constructor(seletor: string) {
		this._elemento = $(seletor);
	}
	
	update(mensagem: string, type: string): void {
		let template = this.template(mensagem, type);	
		this._elemento.html(template);
	}

	protected template(mensagem: string, type: string): string {
		return `<p class="alert alert-${type}">${mensagem}</p>`
	}

}


