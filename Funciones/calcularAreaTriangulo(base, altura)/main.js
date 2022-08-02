const base = Number(prompt('Ingresar base del triángulo'));
const altura = Number(prompt('Ingresar altura del triángulo'));
const calcularAreaTriangulo = (base, altura) => {
    return base * altura / 2;
};
console.log(calcularAreaTriangulo(base, altura));