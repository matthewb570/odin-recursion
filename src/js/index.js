function fibs(num) {
    let fibArray = [];

    let fibCurrent = 0;
    let fibNext = 1;

    for (let i = 0; i < num; i++) {
        fibArray.push(fibCurrent);
        
        let temp = fibNext;
        fibNext = fibCurrent + fibNext;
        fibCurrent = temp;
    }

    return fibArray;
}

function fibsRec(num) {
    if (num === 0) {
        return [];
    }
    
    if (num === 1) {
        return [0];
    }

    if (num === 2) {
        return [0, 1];
    }

    let fibArray = fibsRec(num - 1);
    fibArray.push(fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]);
    return fibArray;
}

console.log(fibs(0));
console.log(fibs(1));
console.log(fibs(2));
console.log(fibs(8));

console.log(fibsRec(0));
console.log(fibsRec(1));
console.log(fibsRec(2));
console.log(fibsRec(8));