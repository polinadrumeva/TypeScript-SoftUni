function calcCircleArea(radius : number) : void {
    let pi : number = 3.14159;
    let area : number = radius * radius * pi;
    console.log(`Circle area is: ${area.toFixed(2)} cm.`);
};

calcCircleArea(5);