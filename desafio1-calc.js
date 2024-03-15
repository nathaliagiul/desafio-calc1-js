let firstNumber = Number(prompt('Digite o primeiro número: '));
let secondNumber = Number(prompt('Digite o segundo número: '));

let isDuplicated;
let isEvenOrOdd;

const sum = (a, b) => (a + b);
const sub = (a, b) => (a - b);
const multi = (a, b) => (a * b);
const div = (a, b) => (a / b);
const restDiv = (a, b) => (a % b);

const evenOrOdd = (thisSum) => {
    if(thisSum % 2 == 0){
        isEvenOrOdd = 'Par';
    } else {
        isEvenOrOdd = 'Ímpar';
    }

    return `Par ou impar: ${isEvenOrOdd}`
};

const duplicated = (a, b) => {
    if(a == b){
        isDuplicated = 'Sim';
    } else {
        isDuplicated = 'Não';
    }

    return `Número iguais: ${isDuplicated}`
};

const thisSum = sum(firstNumber, secondNumber);

const thisDiv = () => {

    let calcDiv = div(firstNumber, secondNumber);
    let calcRestDiv = restDiv(firstNumber, secondNumber);
    
    if (firstNumber == 0 || secondNumber == 0 ||isNaN(calcDiv) || isNaN(calcRestDiv)){
        return `Não é possível realizar a divisão a partir dos valores informados.`;
    } else {
        alert(`Divisão: ${calcDiv}`);
        return `Resto da divisão: ${calcRestDiv}`
    }
};

alert('Soma: ' + thisSum);
alert('Subtração: ' + sub(firstNumber, secondNumber));
alert('Multiplicação: ' + multi(firstNumber, secondNumber));
alert(thisDiv())
alert(evenOrOdd(thisSum));
alert(duplicated(firstNumber, secondNumber));