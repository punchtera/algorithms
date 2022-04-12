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

function setTwoSum(arr: number[], target: number) {
    const setToEval = new Set(arr)

    for (let el of arr) {
        if (setToEval.has(target - el)) {
            return true
        }
    }
    return false
}

export { setTwoSum }