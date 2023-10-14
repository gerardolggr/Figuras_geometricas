(() => {
    
});

//Mostrando el resultado de cualquier figura
let valueResult = document.getElementById('result');

//área y perimetro de un cuadrado
const perimetroSq = (side) => side * 4;
const areaSq = (side) => side * side;

//Obtiene el dato ingresado en el input para el cuadrado
let inputSideSq = document.getElementById('inputSide');

function calcularPerimetroSq(){
    let value = Number(inputSideSq.value);
    const result = `El perimetro de Cuadrado es: ${perimetroSq(value)} cm`;
    valueResult.innerText = result;
}

function calcularAreaSq(){
    const result = `El área del Cuadrado es: ${areaSq(value)} cm^2`;
    valueResult.innerText = result;
}

//área y perimetro de un rectagulo
const areaRectagunlo = (base, altura) => base * altura;
const perimetroRectangulo = (base, altura) => (2 * base) + (2 * altura);

//Obteniendo los valores para el rectángulo
let inputBase = document.getElementById('inputBase');
let inputHeight = document.getElementById('inputHeight');

function calcularAreaRectangulo(){
    let valueB = Number(inputBase.value);
    let valueH = Number(inputHeight.value);

    const result = `El área del Rectángulo es: ${areaRectagunlo(valueB, valueH)} cm^2`;
    valueResult.innerText = result;
}

function calcularPerimetroRectangulo(){
    let valueB = Number(inputBase.value);
    let valueH = Number(inputHeight.value);

    const result = `El perimetro del Rectángulo es: ${perimetroRectangulo(valueB, valueH)} cm`;
    valueResult.innerText = result;
}

//área y perimetro de un triángulo
const perimetroTriangulo = (lado1, lado2, lado3) => lado1 + lado2 + lado3;
const areaTriangulo = (base, altura) => (base * altura)/2;

function calcularPerimetroTriangulo(){
    let inputSide_1 = document.getElementById('inputSide_1');
    let inputSide_2 = document.getElementById('inputSide_2');
    let inputSide_3 = document.getElementById('inputSide_3');

    let valueSide1 = Number(inputSide_1.value);
    let valueSide2 = Number(inputSide_2.value);
    let valueSide3 = Number(inputSide_3.value);

    const result = `El perimetro del Triángulo es: ${perimetroTriangulo(valueSide1, valueSide2, valueSide3)} cm`;
    valueResult.innerText = result;
}

function calcularAreaTriangulo(){
    let inputBaseTriangulo = document.getElementById('inputBaseTriangulo');
    let inputHeightTriangulo = document.getElementById('inputHeightTriangulo');

    let valueBaseTriangulo = Number(inputBaseTriangulo.value);
    let valueHeightTriangulo = Number(inputHeightTriangulo.value);

    const result = `El área del Triángulo es: ${areaTriangulo(valueBaseTriangulo, valueHeightTriangulo)} cm^2`;
    valueResult.innerHTML = result;
}