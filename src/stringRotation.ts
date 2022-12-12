// Assume you have a method isSubstring which checks if one word is a substring of another.
// Given the two strings, s1 and s2, write code to check if s2 is a rotation of s1 using
// only one call to isSubstring

function isSubString(s1: string, s2: string): boolean {
  return s2.indexOf(s1) !== -1;
}

export function isStringRotated(s1: string, s2: string): boolean {
  return isSubString(s1, s2);
}
