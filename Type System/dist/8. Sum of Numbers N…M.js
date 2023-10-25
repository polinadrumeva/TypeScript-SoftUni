"use strict";
function sum(a, b) {
    let n = Number(a);
    let m = Number(b);
    let sum = 0;
    for (let index = n; index <= m; index++) {
        sum += index;
    }
    console.log(sum);
}
;
sum('-8', '20');
