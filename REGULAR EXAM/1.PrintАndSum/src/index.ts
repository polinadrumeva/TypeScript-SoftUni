function calcSum(startNumber: number, endNumber: number) : void{
    const numbers : number[] = [];
    let sum : number = 0;
    for (let index = startNumber; index <= endNumber; index++) {
        numbers.push(index);
        sum += index;
        
    }

    console.log(numbers.join(" "));
    console.log(`Sum: ${sum}`);
    

}

calcSum(5, 10);
calcSum(0, 26);
calcSum(50, 60);