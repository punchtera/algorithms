/**
 * Function that generates the fibonacci sequence
 * @return   {number[]}      an array with the first 10 elements of the fibonacci sequence
 */
export function calculateFibonacciSequence(): number[] {
  const result = [0, 1];
  let acc = 1;
  let prev = 1;
  const SEQUENCE_LIMIT = 10 - result.length;

  for (let i = 0; i < SEQUENCE_LIMIT; i++) {
    result.push(acc);
    acc += prev;
    prev = result[2 + i];
  }

  return result;
}

/**
 * Function that generates the fibonacci sequence recursively
 * @return   {Boolean}      result of algoritm if true or false
 */
export function calculateFibonacciSequenceRecursively(
  arr: number[] = [0, 1]
): number[] {
  const SEQUENCE_LIMIT = 10;
  if (arr.length === SEQUENCE_LIMIT) {
    return arr;
  } else {
    const last = arr[arr.length - 1];
    const previous = arr[arr.length - 2];
    arr.push(last + previous);
    return calculateFibonacciSequenceRecursively(arr);
  }
}
