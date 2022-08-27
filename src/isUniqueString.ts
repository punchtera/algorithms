// Determine if a string has all unique characters, what if you cannot use additional data structures?
export function isUniqueString(testWord: string): boolean {
    const testMap = new Map();
    for (let i = 0; i < testWord.length; i++) {
        testMap.set(testWord[i], i);
    }
    return testMap.size === testWord.length;
}

export function isUniqueStringNoAdditional(testWord: string): boolean {
    return false;
}