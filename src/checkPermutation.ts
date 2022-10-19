/**
 * Function that given two strings, decides if one is a permutation of the other.
 * @param    {String} a    firstString
 * @param    {String} b    secondString
 * @return   {Boolean}      result of algoritm if true or false
 */
export function checkPermutation(a: string, b: string): boolean {
  let res = a;

  if (a.length !== b.length) {
    return false;
  }

  for (let i = 0; i < b.length; i++) {
    const char = b[i];
    const j = res.indexOf(char);

    if (j === -1) {
      return false;
    }

    res = res.slice(0, j) + res.slice(j + 1);
  }

  return true;
}
