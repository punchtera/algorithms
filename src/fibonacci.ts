export function calculateFibonacciSequence() {
    const result = [0, 1];
    let acc = 1;
    let prev = 1;

    for (let i = 0; i < 8; i++) {
        result.push(acc)
        acc += prev
        prev = result[2 + i]
    }

    return result
}

export function calculateFibonacciSequenceRecursively(arr: number[] = [0, 1]): number[] {
    if (arr.length === 10) {
        return arr
    } else {
        const last = arr[arr.length - 1]
        const previous = arr[arr.length - 2]
        arr.push(last + previous)        
        return calculateFibonacciSequenceRecursively(arr)
    }
}
