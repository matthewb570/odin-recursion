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

function mergeSort(array) {
    if (array.length === 1) {
        return array;
    }

    let arrayMidPoint = Math.round(array.length / 2);

    let leftArraySorted = mergeSort(array.slice(0, arrayMidPoint));
    let rightArraySorted = mergeSort(array.slice(arrayMidPoint, array.length));

    let arraySorted = [];
    let leftArrayIndex = 0;
    let rightArrayIndex = 0;
    while (leftArrayIndex < leftArraySorted.length || rightArrayIndex < rightArraySorted.length) {
        let leftCandidate;
        let rightCandidate;
        if (leftArrayIndex < leftArraySorted.length) {
            leftCandidate = leftArraySorted[leftArrayIndex];
        }
        if (rightArrayIndex < rightArraySorted.length) {
            rightCandidate = rightArraySorted[rightArrayIndex];
        }

        if (rightCandidate == undefined || (leftCandidate != undefined && leftCandidate <= rightCandidate)) {
            arraySorted.push(leftCandidate);
            leftArrayIndex++;
        } else {
            arraySorted.push(rightCandidate);
            rightArrayIndex++;
        }
    }
    
    return arraySorted;
}

console.log(fibs(0));
console.log(fibs(1));
console.log(fibs(2));
console.log(fibs(8));

console.log(fibsRec(0));
console.log(fibsRec(1));
console.log(fibsRec(2));
console.log(fibsRec(8));

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));