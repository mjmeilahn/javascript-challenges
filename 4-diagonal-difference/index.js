
// INPUT: [ [5, 3, -3], [7, 14, 0], [-10, 6, 4] ];
// EXPECTED OUTPUT:22

const matrix = [
    [5, 3, -3],
    [7, 14, 0],
    [-10, 6, 4]
];


function diagonalDifference(arr) {
    let left = [];
    let right = [];

    // CALCULATE LEFT
    arr.map((child, i) => {
        left.push(child[i]);
    });

    let Ltotal = left.reduce((acc, val) => acc + val);

    // CALCULATE RIGHT
    arr.slice(0).reverse().map((child, i) => {
        right.push(child[i]);
    });

    let Rtotal = right.reduce((acc, val) => acc + val);

    return Math.abs(Ltotal - Rtotal); 
}

console.log(diagonalDifference(matrix));