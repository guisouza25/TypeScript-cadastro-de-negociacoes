System.register(["../models/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, NegociacoesService;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            NegociacoesService = class NegociacoesService {
                listarNegociacoes(handler) {
                    return fetch('http://localhost:8080/dados')
                        .then(response => {
                        return handler(response);
                    })
                        .then(response => {
                        return response.json();
                    })
                        .then((dados) => {
                        dados
                            .map(dado => { return new index_1.Negociacao(new Date(), dado.vezes, dado.montante); });
                    })
                        .catch(error => {
                        console.log(error.message);
                    });
                }
            };
            exports_1("NegociacoesService", NegociacoesService);
        }
    };
});
