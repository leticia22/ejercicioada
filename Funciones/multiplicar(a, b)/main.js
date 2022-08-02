const a = prompt('Ingresa el primer número');
const b = prompt('Ingresa el segundo número');
const multiplicar = (a,b) => {
    return a * b;
};
console.log(multiplicar(a,b));
const resultadoDeLaMultiplicacion = multiplicar(a,b);
console.log(`El resultado de la multiplicación de ${a} x ${b}   es:  ${resultadoDeLaMultiplicacion}`);
alert(`El resultado de la multiplicación de ${a} x ${b}es: ${resultadoDeLaMultiplicacion}`);