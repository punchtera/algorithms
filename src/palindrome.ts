// given a string, write a function to check if it is a permutation of a palindrome.
// check for spaces and also for duplicated characters
// the complexity is O(n) as n is the length of the string

export function isPalindromePermutation(testStr: string) {
  const testStrNoSpaces = testStr.replace(/\s/g, "").toLocaleLowerCase();
  const testCharsMap = new Map();

  for (const char of testStrNoSpaces) {
    if (testCharsMap.has(char) === false) {
      testCharsMap.set(char, 1);
    } else {
      const currentCharValue = testCharsMap.get(char);
      testCharsMap.set(char, currentCharValue + 1);
    }
  }

  let numberOfOdds = 0;
  for (const keyValue of testCharsMap) {
    const NUMBER_OF_TIMES_INDEX = 1;
    const isEven = keyValue[NUMBER_OF_TIMES_INDEX] % 2 === 0;

    if (isEven) {
      continue;
    } else {
      numberOfOdds += 1;
    }
  }

  if (numberOfOdds === 1 || numberOfOdds === 0) {
    return true;
  }

  return false;
}
