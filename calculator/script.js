let operators = document.querySelectorAll(".operators");
let operands = document.querySelectorAll(".butts");
let resultBar = document.querySelector("#result");
let numbers = document.querySelectorAll(".number")

// for(let operator of operators){

//     operator.onclick = () => {
//         console.log(`${operator.innerText } is clicked`);
//     }
// }

// let gorup = operators.concat(operands);
// show number on resultMessage

let value = " ";
let input = ' ';
for (let operand of operands) {
  operand.onclick = () => {
     value = value + input;
    input = operand.innerText;
     resultBar.innerText = value;
    if (
      input === "+" ||
      input === "-" ||
      input === "/" ||
      input === "*" ||
      input === "=" ||
      input === "%"
    ) {
      switch (input) {
        case "+":
          console.log("add");
          result = add();
          value = result;
          input = "";
          resultBar.innerText = result;
          break;
        case "-":
          console.log("subtract");
          break;

        case "/":
          console.log("division");
          break;

        case "*":
          console.log("mul");
          break;

        case "=":
          console.log("show ans");
          resultBar.innerText = "ans";
          value = "";
          break;

        case "% ":
          console.log("get percentage");
          break;
      }
    }
  };
}

let add = () => {
  return value + 45;
};

function secondValue (){
        for(let operand of numbers){
            operand.onclick = () =>{
            
                return operand.innerText;
            
            }
        }
}
