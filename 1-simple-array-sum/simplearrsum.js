

// INPUT: [1, 2, 3, 4, 10, 11]
// EXPECTED OUTPUT: 31

const numbers = [1, 2, 3, 4, 10, 11];

const simpleArrSum = arr => {
    return arr.reduce((acc, val) => acc + val);
}

console.log(simpleArrSum(numbers));