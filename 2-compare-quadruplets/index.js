

// INPUT "a": [5, 6, 7, 4]
// INPUT "b": [3, 6, 10, 7]

// EXPECTED OUTPUT: [1, 1]


const a = [5, 6, 7, 4];
const b = [3, 6, 10, 7];

const compareQuadruplets = (a, b) => {
    let arr = [];
    let pointsA = 0;
    let pointsB = 0;

    for (let i = 0; i < 4; i++) {
        if (a[i] > 0 && a[i] <= 10 && b[i] > 0 && b[i] <= 10) {
            if (a[i] > b[i]) pointsA++;
            if (a[i] < b[i]) pointsB++;
        }
    }

    arr.push(pointsA);
    arr.push(pointsB);

    return arr;
}

console.log(compareQuadruplets(a, b));