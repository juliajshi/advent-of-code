/*~~~~~~~~*********~~~~~~~~*/
/*~~~~~~~~* DAY 1 *~~~~~~~~*/
/*~~~~~~~~*********~~~~~~~~*/

const func1 = (n) => {
  const arr = n.toString().split('');
  const nums = arr.map(Number);

  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    // last one, loop around
    const nextNum = i == nums.length - 1 ? nums[0] : nums[i + 1];

    if (num === nextNum) {
      count += num;
    }
  }

  return count;
};

// input: 1122
// output: (1 + 2) = 3
// console.log(func1(1111));

// console.log(func1(1122));
// input: 1111
// output: (1 + 1 + 1 + 1) = 4

// input: 1234
// output: (no matches) = 0
// console.log(func1(1234));

// input: 91212129
// output: (9) = 9
// console.log(func1(91212129));

// note: numbers with more than 15-16 digits need to be passed in as string or big Int

/*~~~~~~~~*********~~~~~~~~*/
/*~~~~~~~~* DAY 2 *~~~~~~~~*/
/*~~~~~~~~*********~~~~~~~~*/

const func2 = (n) => {
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

// input: 1212
// output: 6
// console.log(func2(1212));

// input: 1221
// output: 0
// console.log(func2(1221));

// input: 123425
// output: 4
// console.log(func2(123425));

// input: 123123
// output: 12
// console.log(func2(123123));

// input: 12131415
// output: 4
// console.log(func2(12131415));
