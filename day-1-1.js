// example:

// input: 1122
// output: (1 + 2) = 3

// input: 1111
// output: (1 + 1 + 1 + 1) = 4

// input: 1234
// output: (no matches) = 0

// input: 91212129
// output: (9) = 9

const func = (n) => {
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

// console.log(func(1111));
// console.log(func(1122));
// console.log(func(1234));
// console.log(func(91212129));
// note: have to pass in number as string or big Int, as numbers longer than 15-16 digits can't be handled
