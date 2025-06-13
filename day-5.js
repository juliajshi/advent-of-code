/*~~~~~~~~*********~~~~~~~~*/
/*~~~~~~~~* DAY 5 *~~~~~~~~*/
/*~~~~~~~~*********~~~~~~~~*/

// reading from file
const fs = require('fs/promises');

async function loadTextFile(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.split('\n');
    return lines;
  } catch (err) {
    console.error('Error:', err);
    return [];
  }
}

const twistyMaze = (arr) => {
  const arrayNumber = arr.map(Number);
  let count = 0;

  // iterate to end of array in a while loop
  // at each point, increment the i, the old value at the old i'th position, and update the count
  let i = 0;
  while (i < arr.length) {
    const oldI = i;
    i += arrayNumber[i];
    arrayNumber[oldI]++;
    count++;
  }
  return count;
};

const twistyMaze2 = (arr) => {
  let count = 0;

  // same as above but add conditional for incrementing/decrementing
  const arrayNumber = arr.map(Number);
  let i = 0;
  while (i < arr.length) {
    const oldI = i;
    i += arrayNumber[i];
    if (arrayNumber[oldI] >= 3) {
      arrayNumber[oldI]--;
    } else {
      arrayNumber[oldI]++;
    }
    count++;
  }
  return count;
};

async function main() {
  const lines = await loadTextFile('./inputs/day5.txt');
  // PART 1
  // console.log(twistyMaze([0, 3, 0, 1, -3])); // 5
  console.log('PART 1: ', twistyMaze(lines));

  // PART 2
  // console.log('PART 2: ', twistyMaze2([0, 3, 0, 1, -3])); //10
  console.log('PART 2: ', twistyMaze2(lines));
}

main();
