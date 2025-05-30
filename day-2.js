/*~~~~~~~~*********~~~~~~~~*/
/*~~~~~~~~* DAY 2 *~~~~~~~~*/
/*~~~~~~~~*********~~~~~~~~*/

// PART 1
const func1 = (n) => {
  let sum = 0;
  const arrChunk = n.toString().split('\n');
  arrChunk.forEach((element) => {
    const chunk = element.trimStart().split('\t').map(Number);
    sum += Math.max(...chunk) - Math.min(...chunk);
  });

  return sum;
};

// input:
// 5 1 9 5
// 7 5 3
// 2 4 6 8
// output: (9 - 1) + (7 - 3) + (8 - 2) = 8 + 4 + 6 = 18
// console.log(
//   func1(`5	1	9	5
// 7	5	3
// 2	4	6	8`)
// );

// PART 2
const func2 = (n) => {
  let sum = 0;
  const arrChunk = n.toString().split('\n');
  console.log(arrChunk);
  arrChunk.forEach((element) => {
    const chunk = element.trimStart().split('\t').map(Number);
    for (let i = 0; i < chunk.length; i++) {
      for (let j = 0; j < chunk.length; j++) {
        if (i !== j) {
          if (chunk[i] % chunk[j] === 0) {
            sum = sum + chunk[i] / chunk[j];
          }
        }
      }
    }
  });

  return sum;
};

// input:
// 5 9 2 8
// 9 4 7 3
// 3 8 6 5
// output: (8/2) + (9/3) + (6/3) = 4 + 3 + 2 = 9
console.log(
  func2(`5	9	2	8
9	4	7	3
3	8	6	5`)
);
