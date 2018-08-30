

// INPUT: [27, 84, 83, 89, 48, 75, 68, 40]
// EXPECTED OUTPUT: [27, 85, 85, 90, 50, 75, 70, 40]


const values = [27, 84, 83, 89, 48, 75, 68, 40];

function gradingStudents(grades) {
  if (grades.length <= 60) {
    let filtered = grades.filter(grade => grade >= 0);
    let output = [];

    filtered.map(grade => {
      if (grade >= 38) {
        if (grade % 5 === 3) {
          grade += 2;
        } else if (grade % 5 === 4) {
          grade += 1;
        }
      }

      output.push(grade);
    });

    return output;
  }
}

console.log(gradingStudents(values));