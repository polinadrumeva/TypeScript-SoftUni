function calc(firstNumber: number, operator: string, secondNumber: number) {
    switch (operator) {
        case "+": 
            return (firstNumber + secondNumber).toFixed(2);
        case "-":
            return (firstNumber - secondNumber).toFixed(2);
        case "/":
            return (firstNumber / secondNumber).toFixed(2);
        case "*":
            return (firstNumber * secondNumber).toFixed(2);
    }
}

console.log(calc(5,"+",10));
console.log(calc(25.5,"-",3));
console.log(calc(9,"/",2));
console.log(calc(7,"*",5));
