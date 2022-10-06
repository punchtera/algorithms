export function transformArray(s: string) {
  let numberOfTimesCharacter = 1;
  let characterPointer = s[0];

  let response = [];
  for (let index = 1; index <= s.length; index++) {
    if (characterPointer === s[index]) {
      numberOfTimesCharacter += 1;
    } else {
      response.push({ [characterPointer]: numberOfTimesCharacter });
      numberOfTimesCharacter = 1;
      characterPointer = s[index];
    }
  }

  return response;
}
