/**
 * @param milissegundos se não for informado - valor padrão 500 ms.
 */
export function throttle(milissegundos = 500) {

	return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
	
		const metodoOriginal = descriptor.value; 
		
		let timer = 0;

		descriptor.value = function(event: Event, ...args: any[]) {

			//o decorator throttle está em metodos em que o usuario dispara o evento
			//e esses metodos possuem o objeto event. O event pode ser acessado 
			//implicitamente dentro do metodo de evento.
			event.preventDefault();

			clearInterval(timer);
			timer = setTimeout(() => { metodoOriginal.apply(this, args) }, 500);
		}
		return descriptor;
	}

}