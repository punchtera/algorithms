export function calculateFibonacciSequence(){
    const result = [0, 1];
    let acc = 1;
    let prev = 1;

    for (let i = 0; i < 8; i++) {
        result.push(acc)
        acc += prev
        prev = result[2+i]
    }

    return result
}

