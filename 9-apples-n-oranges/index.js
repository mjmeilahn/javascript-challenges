

// INPUT: 7, 11, 5, 15, [-2, 2, 1], [5, 6]
// EXPECTED OUTPUT: 2, 0

const j = 7;
const k = 11;
const l = 5;
const m = 15;
const apples = [-2, 2, 1, 5];
const oranges = [4, 5, 6];

function applesAndOranges(s, e, a, o, apples, oranges) {
    let begin = s || 1;
    let end = e || 1;
    
    let appleArr = apples.map(apple => apple + a);
    let orgArr = oranges.map(orange => orange + o);
    
    let finalA = appleArr.filter(app => app >= begin && app <= end);
    let finalO = orgArr.filter(org => org >= begin && org <= end);
    
    console.log(finalA.length + ', ' + finalO.length);
}

console.log(applesAndOranges(j, k, l, m, apples, oranges));