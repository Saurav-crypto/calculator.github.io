const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator")
const equalSign = document.querySelector(".equal-sign")

const calculatorScreen = document.querySelector('.calculator-screen')
let currentInput = '0'
let calculationOperator = ''
let prevInput = '0'

const updateScreen = (number)=>{
  calculatorScreen.value = number
}
const inputOperator = (operator)=>{
  prevInput = currentInput
  calculationOperator = operator
  currentInput = '0'
}

const inputNumber=(number)=>{
  if(currentInput==='0'){
    currentInput=number
  }
  else
   {
  currentInput += number
    }
  }
  operators.forEach((operator) => {
    operator.addEventListener("click", (event)=>{
      //console.log(event.target.value);
      inputOperator(event.target.value)

    })

  });


numbers.forEach((number) => {
  number.addEventListener("click", (event)=>{
    inputNumber(event.target.value)
  //  console.log(currentInput);
    updateScreen(currentInput)
  })

})
equalSign.addEventListener("click" , () =>{
  calculate()
  updateScreen(currentInput)

  //console.log("equal button is pressed");
})
const calculate =() => {
  let result = 0
  prevInput = parseInt(prevInput)
  currentInput = parseInt(currentInput)
  switch(calculationOperator){
    case '+' :
    result = prevInput + currentInput
    break;
    case '*' :
    result = prevInput * currentInput
    break;
    case '-' :
    result = prevInput - currentInput
    break;
    case '/' :
    result = prevInput / currentInput
    break;
    default:
      return
  }
  currentInput =result.toString()
  calculationOperator = ''
}
