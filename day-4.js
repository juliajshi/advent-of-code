/*~~~~~~~~*********~~~~~~~~*/
/*~~~~~~~~* DAY 4 *~~~~~~~~*/
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

// PART 1
const HE_passphrases = (arr) => {
  let count = 0;
  // for each line
  // divide into array, each element is a word
  // add each word into a set (no duplicates)
  // if set size and array size are the same, means no repeats, add to counter
  arr.forEach((element) => {
    const chunks = element.split(' ');
    if (new Set(chunks).size == chunks.length) {
      count++;
    }
  });

  return count;
};

// PART 2
const HE_passphrases_anagram = (arr) => {
  let count = 0;
  // same as above, but sort each word first in alphabetical order
  arr.forEach((element) => {
    const sortedChunks = element
      .split(' ')
      .map((chunk) => chunk.split('').sort().join(''));
    if (new Set(sortedChunks).size == sortedChunks.length) {
      count++;
    }
  });

  return count;
};

async function main() {
  const lines = await loadTextFile('./inputs/day4_1.txt');
  // PART 1
  // console.log(
  //   HE_passphrases_anagram([
  //     'aa bb cc dd ee',
  //     'aa bb cc dd aa',
  //     'aa bb cc dd aaa',
  //   ])
  // );
  console.log('PART 1: ', HE_passphrases(lines));

  // PART 2
  // console.log(
  //   HE_passphrases_anagram([
  //     'abcde fghij',
  //     'abcde xyz ecdab',
  //     'a ab abc abd abf abj',
  //     'iiii oiii ooii oooi oooo',
  //     'oiii ioii iioi iiio',
  //   ])
  // );
  console.log('PART 2: ', HE_passphrases_anagram(lines));
}

main();
