

// INPUT: [5, 2, 3, 3, 2, 7, 7, 7, 2, 1, 4, 6]
// EXPECTED OUTPUT: 3

const values = [5, 2, 3, 3, 2, 7, 7, 7, 2, 1, 4, 6];

function birthdayCakeCandles(ar) {
    let reformat = ar.filter(a => a > 0).sort((a, b) => a - b);
    let arrLength = reformat.length - 1;
    let highest = reformat[arrLength];
    let amount = reformat.filter(a => a === highest);
    
    return amount.length;
}

console.log(birthdayCakeCandles(values));