//declare var $: any;

export abstract class View<T> {

	private _elemento: JQuery;

	constructor(seletor: string) {
		//this._elemento = document.querySelector(seletor);
		this._elemento = $(seletor);
	}


	public update(model: T): void {
		//this._elemento.innerHTML = this.template(model);
		this._elemento.html(this.template(model));
	}
	
	protected abstract template(model: T): string;

}  


