/**
 * Busca um elemento do DOM apenas quando a propriedade no qual
 * este decorator está posicionado for acessada - Lazy Loading.
 * Injeta elementos do DOM nas propriedades da classe, transformando
 * essas propriedades em getters.
 * @param seletor 
 */
export function domInject(seletor: string) {

	return function (target: any, propertyKey: string) {

		let elemento: JQuery;

		/**
		 * Funcao que pode ser acessada como propriedade. O decorator coloca
		 * essa função como getter em _inputData, etc.., quando o input for
		 * acessado verifica se o elemento ja foi buscado. Se o getter for
		 * chamado de novo o elemento já estará selecionado.
		 */
		const getter = function() {

			//verificando se ja existe elemento que foi buscado
			if(!elemento) {
				console.log(target)
				console.log(`buscando ${seletor} para injetar em ${propertyKey}`)
				elemento = $(seletor);
			}

			return elemento;
		}

		/**
		 * Aqui eu coloco a função acima e coloco na propriedade do objeto
		 * no qual o decorator está posicionado.
		 * target - que vai receber a property que vai ser criada.
		 * propertyKey - nome da propriedade a ser criada
		 * ultimo param - definindo atributo da property, se vai ser um getter ou setter,
		 * get: getter - passando a função que define o getter
		 */
		Object.defineProperty(target, propertyKey, {
			get: getter
		});
	}
}