

// INPUT: a = 6;

// EXPECTED OUTPUT:
//               #
//              ##
//             ###
//            ####
//           #####
//          ######

const a = 6;

function staircase(n) {
    if (n > 0) {
        let str = '';

        for (let i = 1; i <= n; i++) {
            str = ' '.repeat(n - i);
            str += (i !== 1) ? '#'.repeat(i) : '#';
            console.log(str);
        }
    }
}

console.log(staircase(a));