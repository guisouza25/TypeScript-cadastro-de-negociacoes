System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var MensagemView;
    return {
        setters: [],
        execute: function () {
            MensagemView = class MensagemView {
                constructor(seletor) {
                    this._elemento = $(seletor);
                }
                update(mensagem, type) {
                    let template = this.template(mensagem, type);
                    this._elemento.html(template);
                }
                template(mensagem, type) {
                    return `<p class="alert alert-${type}">${mensagem}</p>`;
                }
            };
            exports_1("MensagemView", MensagemView);
        }
    };
});
