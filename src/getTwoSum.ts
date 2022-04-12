function naiveTwoSum(arr: number[], target: number) {

    const arrLength = arr.length

    for (let i = 0; i < arrLength; i++) {

        for (let j = i + 1; j < arrLength; j++) {
            if (arr[i] == target - arr[j]) {
                return true
            }

        }
    }
    return false
}

// This only works if the value that you return is a boolean, if you need the expected pair this would
// be different
function getTwoSum(arr: number[], target: number) {
    const setToEval = new Set(arr)

    for (let el of arr) {
        if (setToEval.has(target - el)) {
            return true
        }
    }
    return false
}

export { getTwoSum }