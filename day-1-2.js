// example:

// input: 1212
// output: 6

// input: 1221
// output: 0

// input: 123425
// output: 4

// input: 123123
// output: 12

// input: 12131415
// output: 4

const func = (n) => {
  const arr = n.toString().split('');
  const nums = arr.map(Number);

  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    // last one, loop around to the halfway point
    const nextNum = nums[(i + nums.length / 2) % nums.length];
    if (num === nextNum) {
      count += num;
    }
  }

  return count;
};

// console.log(func(1212));
// console.log(func(1221));
// console.log(func(123425));
// console.log(func(123123));
// console.log(func(12131415));
// note: have to pass in number as string or big Int, as numbers longer than 15-16 digits can't be handled
