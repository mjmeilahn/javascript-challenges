

// INPUT "arr": [26, 0, -3, -85, 73, 43]
// EXPECTED OUTPUT: ["0.50", "0.33", "0.17"]



const numbers = [26, 0, -3, -85, 73, 43];

function plusMinus(arr) {
    let positives = [];
    let negatives = [];
    let zeroes = [];
    let positiveAmt = 0;
    let negativeAmt = 0;
    let zeroAmt = 0;

    arr.map(num => {
        if (num === 0) {
            zeroes.push(1);
        } else if (num > 0 && num <= 100) {
            positives.push(1);  
        } else if (num < 0 && num >= -100) {
            negatives.push(1);
        }
    });

    if (positives.length > 0) {
        positiveAmt = positives.length / arr.length;
    }

    if (negatives.length > 0) {
        negativeAmt = negatives.length / arr.length;
    }

    if (zeroes.length > 0) {
        zeroAmt = zeroes.length / arr.length;
    }

    return [
        positiveAmt.toFixed(2), 
        negativeAmt.toFixed(2), 
        zeroAmt.toFixed(2)
    ];
}

console.log(plusMinus(numbers));