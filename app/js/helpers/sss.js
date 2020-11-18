class Retangulo {
    constructor(altura, lado) {
        this.altura = altura;
        this.lado = lado;
    }
    calculaArea() {
        return this.altura * this.lado;
    }
}
class Quadrado {
    constructor(lado) {
        this.lado = lado;
    }
    calculaArea() {
        return this.lado * this.lado;
    }
}
class Circulo {
    constructor(raio) {
        this.raio = raio;
    }
    calculaArea() {
        return Math.PI * this.raio * this.raio;
    }
}
class CalculadorDeArea {
    static calcula(...areas) {
        var total = 0;
        areas.forEach(area => {
            var calcArea = area.calculaArea();
            total = total + calcArea;
        });
        return total;
    }
}
const quadrado = new Quadrado(30);
const retangulo = new Retangulo(50, 30);
const circulo = new Circulo(20);
const total = CalculadorDeArea.calcula(quadrado, retangulo, circulo);
console.log(total);
