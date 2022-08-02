const num = Number(prompt('Ingrese un número'))
const esImpar = (num) => {
    return num % 2 != 0;
};
console.log(esImpar(num))