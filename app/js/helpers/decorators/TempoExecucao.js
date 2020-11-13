System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function tempoDeExecucao() {
        return function (target, propertyKey, descriptor) {
            const metodoOriginal = descriptor.value;
            descriptor.value = function (...args) {
                console.log('-------------');
                console.log(`parâmetros passados para o método ${propertyKey}: ${JSON.stringify(args)}`);
                const t1 = performance.now();
                const retorno = metodoOriginal.apply(this, args);
                const t2 = performance.now();
                console.log(`o retorno do método ${propertyKey} é ${JSON.stringify(retorno)}`);
                console.log(`tempo de execução do método ${propertyKey}: ${t2 - t1} ms`);
                return retorno;
            };
            return descriptor;
        };
    }
    exports_1("tempoDeExecucao", tempoDeExecucao);
    return {
        setters: [],
        execute: function () {
        }
    };
});
