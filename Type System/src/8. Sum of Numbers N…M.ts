function sum(a : string, b : string) : void {
    let n : number = Number(a);
    let m : number = Number (b);
    let sum : number = 0;

    for (let index = n; index <= m; index++) {
        sum += index;
    }

    console.log(sum);
};

sum('-8', '20');