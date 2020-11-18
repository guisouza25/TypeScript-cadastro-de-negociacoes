import { tempoDeExecucao } from '../helpers/decorators/index' 

//declare var $: any;

export abstract class View<T> {

	private _elemento: JQuery;
	private _escapar: boolean;

	/**
	 * @param seletor 
	 * @param escapar Opcional. True para remover scripts não desejados no template da view.
	 */
	//escapar? opcional quando nao é passado vira undefined. Por causa do (strictNullChecks)
	//faço o valor padrão ser false caso não seja passado nenhum param.
	constructor(seletor: string, escapar = false) {

		//this._elemento = document.querySelector(seletor);
		this._elemento = $(seletor);
		this._escapar = escapar;
	}

	@tempoDeExecucao()
	update(model: T): void {
		
		let template = this.template(model);
		
		if(this._escapar) {
			template = template.replace(/<script>[\s\S]*?<\/script>/, '');
		}
		//this._elemento.innerHTML = this.template(model);
		this._elemento.html(template);
	}
	
	protected abstract template(model: T): string;


}  


