

// INPUT: [4, 7, 2, 8, 9, 4, 26, 5]

// EXPECTED OUTPUT: 39 63


const values = [4, 7, 2, 8, 9, 4, 26, 5];

function miniMaxSum(arr) {
    let reformat = arr.filter(a => a > 0).sort((a, b) => a - b);
    let min = reformat.slice();
    let max = reformat.slice();

    min.shift();
    max.pop();

    let minTotal = min.reduce((acc, val) => acc + val);
    let maxTotal = max.reduce((acc, val) => acc + val);

    console.log(maxTotal + ' ' + minTotal);
}

console.log(miniMaxSum(values));