/**
 * Function that given two strings, returns the length of the biggest substring.
 * @param    {string} a   firstString
 * @param    {string} b   secondString
 * @return   {number}     length of the biggest substring
 */
function commonSubstring(a: string, b: string): number {
  let biggerIndex = Number.MIN_SAFE_INTEGER;

  const setSubStrings = new Set();

  for (let i = 0; i < a.length; i++) {
    const subWord = a.substring(i);
    setSubStrings.add(subWord);

    for (let j = subWord.length - 1; j > 0; j--) {
      const innerSubWord = subWord.substring(0, j);
      setSubStrings.add(innerSubWord);
    }
  }

  for (let i = 0; i < b.length; i++) {
    const bSubWord = b.substring(i);

    if (setSubStrings.has(bSubWord) && bSubWord.length > biggerIndex) {
      biggerIndex = bSubWord.length;
    }

    for (let j = bSubWord.length - 1; j > 0; j--) {
      const innerSubWord = bSubWord.substring(0, j);

      if (
        setSubStrings.has(innerSubWord) &&
        innerSubWord.length > biggerIndex
      ) {
        biggerIndex = innerSubWord.length;
      }
    }
  }

  return biggerIndex;
}

export { commonSubstring };
