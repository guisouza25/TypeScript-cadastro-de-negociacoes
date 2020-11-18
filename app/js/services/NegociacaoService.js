System.register(["../models/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, NegociacaoService;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            NegociacaoService = class NegociacaoService {
                listarNegociacoes(handler) {
                    return fetch('http://localhost:8080/dadsos')
                        .then(response => {
                        return handler(response);
                    })
                        .then(response => {
                        return response.json();
                    })
                        .then((dados) => {
                        return dados
                            .map(dado => { return new index_1.Negociacao(new Date(), dado.vezes, dado.montante); });
                    })
                        .catch(error => {
                        console.log(error);
                        throw new Error('Não foi possível importar as negociações! Tente mais tarde.');
                    });
                }
            };
            exports_1("NegociacaoService", NegociacaoService);
        }
    };
});
