// implement a method to perform basic string compression using the counts of repeated characters.
// For example, the string aabcccccaaa would become a2b1c5a3. if the "compressed" would not become
// smaller than the original string, your method should return the original string.
// assumption: the string has only uppercase and lowecase letters (A-Z)(a-z).
/**
 * Function that compress a given string based on occurrence.
 * @param    {string} stringOne   firstString
 * @return   {string}             the compressed string
 */
export function compressString(stringOne: string): string {
  let result = "";
  let numberOfTimes = 1;
  for (let i = 0; i < stringOne.length; i++) {
    const character = stringOne[i];
    const followingCharacter = stringOne[i + 1];

    if (character == followingCharacter) {
      numberOfTimes += 1;
    } else {
      result += `${character}${numberOfTimes}`;
      numberOfTimes = 1;
    }
  }

  if (result.length > stringOne.length) {
    return stringOne;
  }
  return result;
}
