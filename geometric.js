//área y perimetro de un cuadrado
let valueResult = document.getElementById('result');
const perimetroSq = (side) => side * 4;
const areaSq = (side) => side * side;

console.log(perimetroSq(4));
console.log(areaSq(5));

function calcularPerimetroSq(){
    let inputSide = document.getElementById('inputSide');
    let value = Number(inputSide.value);
    
    const result = `El perimetro de Cuadrado es: ${perimetroSq(value)} cm`;
    valueResult.innerText = result;
}

function calcularAreaSq(){
    let inputSide = document.getElementById('inputSide');
    let value = Number(inputSide.value);

    const result = `El área del Cuadrado es: ${areaSq(value)} cm^2`;
    valueResult.innerText = result;
}