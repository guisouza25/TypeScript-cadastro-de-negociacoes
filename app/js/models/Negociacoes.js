class Negociacoes {
    constructor() {
        //_negociacoes:Negociacao[] array de negociacao
        this._negociacoes = [];
    }
    //encapsular a lista de negociacoes para que seja
    //possivel apenas incluir e nao remover
    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }
    getNegociacoes() {
        //passando a lista de negociacoes para um novo array, preservando
        //o array original(_negociacoes)
        return [].concat(this._negociacoes);
    }
}
