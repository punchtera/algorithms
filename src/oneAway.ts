// There are three types of edits that can be performed on strings:
// insert a character, remove a character or replace a character.
// given 2 strings, write a function to check if they are one edit away.
/**
 * Function that determines if a string is one operation away on editing.
 * @param    {string} firstString     the word to test
 * @param    {string} secondString    the comparison word to test
 * @return   {boolean}                is the string one operation away the result?
 */
export function isOneEditAway(firstString: string, secondString: string):boolean {
  const testCharsMap = new Map();

  for (const char of firstString) {
    if (testCharsMap.has(char) === false) {
      testCharsMap.set(char, 1);
    } else {
      const currentCharValue = testCharsMap.get(char);
      testCharsMap.set(char, currentCharValue + 1);
    }
  }

  for (const char2 of secondString) {
    const currentCharValue = testCharsMap.get(char2);
    const nextValue = currentCharValue - 1;

    if (nextValue === 0 || isNaN(nextValue)) {
      testCharsMap.delete(char2);
    } else {
      testCharsMap.set(char2, nextValue);
    }
  }

  const NUMBER_OF_OPERATIONS_AWAY = 1;
  return testCharsMap.size === NUMBER_OF_OPERATIONS_AWAY;
}
