function cal(first_number, second_number, operators){
        
       first_number = parseInt (prompt("enter first number"));
       second_number = parseInt (prompt("enter second number"));
       operators = parseInt(prompt("enter an operator either +, -, /,*"));
       switch (operators) {
        case "+":
       console.log(addition(first_number,second_number));
         break;
         case "-":
            console.log(minus(first_number,second_number));
              break;
         case "*":
           console.log(multiplication(first_number,second_number));
         break;
         case "/":
         console.log(division(first_number,second_number));
         break;
 default:
     console.log("Invalid operator, please enter either + or - or / or *");
     break;
}
}

 
cal()
function addition (first_number,second_number){
    let result = first_number + second_number;
    console.log(` ${first_number}+${second_number} = ${result}`)
}

function minus (first_number,second_number){
    let result = first_number - second_number;
    console.log(` ${first_number}-${second_number} = ${result}`)
}
function multiplication (first_number,second_number){
    let result = first_number * second_number;
    console.log(` ${first_number}*${second_number} = ${result}`)
}
function division (first_number,second_number){
    let result = first_number / second_number;
    console.log(` ${first_number}/${second_number} = ${result}`)
}
console.log(addition(1,4));
console.log(minus(1,4));
console.log(multiplication(1,4));
console.log(division(1,4));