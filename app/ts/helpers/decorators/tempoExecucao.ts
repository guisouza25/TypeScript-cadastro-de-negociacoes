export function tempoDeExecucao() {

	return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {

		//o metodo no qual o decorator está posicionado. Guardando o metodo original
		const metodoOriginal = descriptor.value;

		//sobrescrevendo o metodo original com esta funcao. ...args -  o método que estou 
		//colocando no decorator pode receber varios parametros de varios tipos. para ter 
		//acesso a esses paremetros eles sao colocados em um array any[]
		descriptor.value = function(...args: any[]) {
			console.log('-------------');
			console.log(`parâmetros passados para o método ${propertyKey}: ${JSON.stringify(args)}`);
			const t1 = performance.now();

			//apply - chamar o metodo original no contexto this, passando os parametros args
			const retorno = metodoOriginal.apply(this, args);

			const t2 = performance.now();	
			console.log(`o retorno do método ${propertyKey} é ${JSON.stringify(retorno)}`);
			console.log(`tempo de execução do método ${propertyKey}: ${t2- t1} ms`)
			return retorno;
		} 
		return descriptor;
	}

}