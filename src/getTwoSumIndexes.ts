// This only works if the value that you return is a boolean, if you need the expected pair this would
// be different
function getTwoSumIndexes(arr: number[], target: number) {
  const newMap = new Map();
  const resMap = new Map();

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    newMap.set(element, i);
  }

  for (const el of arr) {
    const compliment = target - el;
    const indexPair = newMap.get(compliment);
    const index = newMap.get(el);

    if (index && indexPair && compliment > el) {
      resMap.set(el, [el, compliment]);
    }
    if (index && indexPair && compliment < el) {
      resMap.set(compliment, [compliment, el]);
    }
  }

  return Array.from(resMap.values());
}

export { getTwoSumIndexes };
