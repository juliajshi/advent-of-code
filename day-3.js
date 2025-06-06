/*~~~~~~~~*********~~~~~~~~*/
/*~~~~~~~~* DAY 3 *~~~~~~~~*/
/*~~~~~~~~*********~~~~~~~~*/

// PART 1: O(√n)
const spiralMemory = (n) => {
  // find coordinates in reference to 1 (0,0)
  let highEnd = 1;
  let side = 1;
  let layer = 0;

  // figure out which ring it's in, or the bounding numberes
  // ex: n = 12, lowEnd = 9, highEnd = 25
  while (n > highEnd) {
    side = Math.sqrt(highEnd);
    highEnd = (side + 2) * (side + 2);
    layer++;
  }
  // const lowEnd = (Math.sqrt(highEnd) - 2) ** 2;
  const sideLength = Math.sqrt(highEnd) - 1;

  // trace back how far in which direction the exact number is
  let pointX = 0;
  let pointY = 0;
  if (n > highEnd - sideLength && n <= highEnd) {
    // console.log('bottom\n'); // 25 -> 22
    // starting point (2, -2), move x-- back
    pointX = layer;
    pointY = -layer;

    for (let i = 0; i <= sideLength; i++) {
      if (n === highEnd - i) {
        pointX = layer - i;
      }
    }
  } else if (n > highEnd - sideLength * 2 && n <= highEnd - sideLength) {
    // console.log('left side\n'); // 21 -> 18
    // starting point (-2, -2), move y++ back
    pointX = -layer;
    pointY = -layer;

    const offset = highEnd - sideLength;
    for (let i = 0; i <= sideLength; i++) {
      if (n === offset - i) {
        pointY = -layer + i;
      }
    }
  } else if (n > highEnd - sideLength * 3 && n <= highEnd - sideLength * 2) {
    // console.log('top\n'); // 17 -> 13
    // starting point (-2, 2), move x++ back
    pointX = -layer;
    pointY = layer;

    const offset = highEnd - sideLength * 2;
    for (let i = 0; i <= sideLength; i++) {
      if (n === offset - i) {
        pointX = -layer + i;
      }
    }
  } else {
    // console.log('right side\n'); // 12 -> 10
    // starting point (-2, 2), move y-- back
    pointX = layer;
    pointY = layer;

    const offset = highEnd - sideLength * 3;
    for (let i = 0; i <= sideLength; i++) {
      if (n === offset - i) {
        pointY = layer - i;
      }
    }
  }

  // calculate taxicab distance
  const distance = Math.abs(pointX) + Math.abs(pointY);
  return distance;
};

// 0
console.log(spiralMemory(0));

// 3
console.log(spiralMemory(12));

// const arr = [];
// for (let i = 25; i >= 10; i--) {
//   arr.push(i);
// }
// arr.forEach((item) => {
//   console.log(item);
//   spiralMemory(item);
// });

// 23
console.log(spiralMemory(23));

// 31
console.log(spiralMemory(1024));
