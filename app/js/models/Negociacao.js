System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Negociacao;
    return {
        setters: [],
        execute: function () {
            Negociacao = class Negociacao {
                constructor(data, quantidade, valor) {
                    if (!data) {
                        throw new Error('data deve ser preenchida');
                    }
                    this._data = data;
                    this._quantidade = quantidade;
                    this._valor = valor;
                }
                get data() {
                    return this._data;
                }
                get quantidade() {
                    return this._quantidade;
                }
                get valor() {
                    return this._valor;
                }
                get volume() {
                    return (this._quantidade * this._valor);
                }
            };
            exports_1("Negociacao", Negociacao);
        }
    };
});
