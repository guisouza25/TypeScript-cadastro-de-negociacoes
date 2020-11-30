System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Negociacoes;
    return {
        setters: [],
        execute: function () {
            Negociacoes = class Negociacoes {
                constructor() {
                    this._negociacoes = [];
                }
                adiciona(negociacao) {
                    this._negociacoes.push(negociacao);
                }
                getNegociacoes() {
                    let novoArray = Object.assign([], this._negociacoes);
                    return novoArray;
                }
                paraTexto() {
                    console.log(JSON.stringify(this._negociacoes));
                }
                isEqual(negociacoes) {
                    return JSON.stringify(this._negociacoes) == JSON.stringify(negociacoes.getNegociacoes());
                }
            };
            exports_1("Negociacoes", Negociacoes);
        }
    };
});
