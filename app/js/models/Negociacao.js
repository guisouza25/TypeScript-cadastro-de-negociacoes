class Negociacao {
    constructor(data, quantidade, valor) {
        //undeline - propriedades nao podem ser alteradas fora dos metodos
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
}
