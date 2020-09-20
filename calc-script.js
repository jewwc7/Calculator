const container = document.createElement('div');
container.classList.add('container');
document.body.append(container);


/////////////
const answerDiv = document.createElement('div');
answerDiv.classList.add('answer');


/////////////

const percentageDiv = document.createElement('div');
percentageDiv.classList.add('percentage');
const clearSign = document.createElement('button');
clearSign.textContent = 'C';
clearSign.dataset.clearID = "clear";
const percentSign = document.createElement('button');
percentSign.textContent = '%';
percentSign.dataset.btnID = "percentage"
const divisionSign = document.createElement('button');
divisionSign.textContent = '/';
divisionSign.dataset.btnID = "/"

percentageDiv.append(clearSign, percentSign, divisionSign);

/////////////////////////////

let multiplyDiv = document.createElement('div');
multiplyDiv.classList.add('multiply');
let multiplySign = document.createElement('button');
multiplySign.textContent = "X";
multiplySign.dataset.btnID = "*";
let numberSeven = document.createElement('button');
numberSeven.textContent = '7';
numberSeven.dataset.numID = "7";
let numberEight = document.createElement('button');
numberEight.textContent = '8';
numberEight.dataset.numID = "8";
let numberNine = document.createElement('button');
numberNine.textContent = '9';
numberNine.dataset.numID = "9"

multiplyDiv.append(numberSeven, numberEight, numberNine, multiplySign);

////////////////////////////

let subtractDiv = document.createElement('div');
subtractDiv.classList.add('subtract');
let subtractSign = document.createElement('button');
subtractSign.textContent = "-"
subtractSign.dataset.btnID = "-"
let numberFour = document.createElement('button');
numberFour.textContent = '4';
numberFour.dataset.numID = "4";
let numberFive = document.createElement('button');
numberFive.textContent = '5';
numberFive.dataset.numID = "5"
let numberSix = document.createElement('button');
numberSix.textContent = '6';
numberSix.dataset.numID = "6"

subtractDiv.append(numberFour, numberFive, numberSix, subtractSign)

/////////////////////////////

let additionDiv = document.createElement('div');
additionDiv.classList.add('addition');
let additionSign = document.createElement('button');
additionSign.textContent = "+"
additionSign.dataset.btnID = "+"
let numberOne = document.createElement('button');
numberOne.textContent = '1';
numberOne.dataset.numID = "1"
let numberTwo = document.createElement('button');
numberTwo.textContent = '2';
numberTwo.dataset.numID = "2"
let numberThree = document.createElement('button');
numberThree.textContent = '3';
numberThree.dataset.numID = '3';

additionDiv.append(numberOne, numberTwo, numberThree, additionSign);

//////////////////////////

let equalsDiv = document.createElement('div');
equalsDiv.classList.add('equals');
let equalsSign = document.createElement('button');
equalsSign.textContent = '=';
equalsSign.dataset.equalID = "="
let numberZero = document.createElement('button');
numberZero.textContent = '0';
numberZero.dataset.numID = "0";
let decimal = document.createElement('button');
decimal.textContent = '.';
decimal.dataset.numID = ".";
decimal.classList = 'decimal';

equalsDiv.append(numberZero, decimal, equalsSign);

//////////////////////

container.append(answerDiv, percentageDiv, multiplyDiv, subtractDiv, additionDiv, equalsDiv);



const calculator = {
  displayValue: '0',
  firstOperand: null,
  operator: null,
  waitingForSecondOperand: false,
  secondOperand: null
}




function updateDisplay(){
  answerDiv.textContent = calculator.displayValue;
      console.log(calculator)
    }
updateDisplay();

function numberPushed(num){
    if(answerDiv.textContent == '0' && num && calculator.firstOperand == null){
    answerDiv.textContent = num;
    calculator.displayValue = num;      //made the propertyvalue o calculator assigned to the num parameter(passed in number-keys.dtaset.numid)
    calculator.firstOperand = answerDiv.textContent;
      console.log(calculator);
    }
    else if(answerDiv.textContent != '0' && num){
    answerDiv.textContent += num;
    calculator.displayValue = answerDiv.textContent;
      console.log(calculator);
      calculator.firstOperand = answerDiv.textContent;
      console.log(calculator);
    }

    }

function operatorPressed(operator){
    calculator.firstOperand = answerDiv.textContent;
    calculator.operator = operator;
    calculator.waitingForSecondOperand = true;
    answerDiv.textContent = '';
            }


function showSecondOperand(num){
if(answerDiv.textContent == '0' && num){
  answerDiv.textContent = num
  calculator.displayValue = num;      //made the propertyvalue o calculator assigned to the num parameter(passed in number-keys.dtaset.numid)
  calculator.secondOperand = answerDiv.textContent;
  console.log(calculator);
}
  if (answerDiv.textContent != '0' && num){
  answerDiv.textContent += num;
  calculator.displayValue = answerDiv.textContent;
  calculator.secondOperand = answerDiv.textContent;
  console.log(calculator);
}
}

function showAnswer(num1, num2, operator, ){
  operator = calculator.operator
  num1 = calculator.firstOperand
  num2 = calculator.secondOperand
  if(operator == '+'){
    let addition =  +num1 + +num2;                       ///added plus sign to turn string into numbers. When left as strings the calculator concatenates instead of adding
    answerDiv.textContent = addition;
    calculator.displayValue = addition
  }
  else if(operator == '-'){
    let subtraction =  +num1 - +num2;                       ///added plus sign to turn string into numbers. When left as strings the calculator concatenates instead of adding
    answerDiv.textContent = subtraction;
    calculator.displayValue = subtraction;
  }
  else if(operator == '*'){
    let multiply =  +num1 * +num2;                       ///added plus sign to turn string into numbers. When left as strings the calculator concatenates instead of adding
    answerDiv.textContent = multiply;
    calculator.displayValue = multiply;
  }

  else if(operator == '/'){
    let division =  +num1 /+num2;                       ///added plus sign to turn string into numbers. When left as strings the calculator concatenates instead of adding
    answerDiv.textContent = division;
    calculator.displayValue = division;
  }
}

function clearAll(){
  calculator.displayValue = '0';
  calculator.firstOperand = null;
  calculator.operator = null;
  calculator.waitingForSecondOperand = false;
  calculator.secondOperand = null;
  answerDiv.textContent = '0'
  }



container.addEventListener('click', function(e){
  let keys = e.target;
  let numbers = keys.dataset.numID;
  let operators = keys.dataset.btnID;
  let answer = keys.dataset.equalID
  let clear = keys.dataset.clearID
  let displayValue = calculator.displayValue

  if(numbers && calculator.waitingForSecondOperand == false){
  numberPushed(numbers);
}
else if(operators){
  operatorPressed(operators)
}

else if(calculator.waitingForSecondOperand = true && numbers){
      showSecondOperand(numbers)

}

else if (answer) {
  showAnswer()
}

else if (keys) {
  clearAll()
}

})
