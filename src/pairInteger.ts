// The complexity of this function is O(nlogn) as the value of the internal foreach 
// is decreasing over time because of the external one 

export function calculatePairInteger(arr: number[], diff: number): {}[] {

    const response: {}[] = [];

    for (let iindex = 0; iindex < arr.length; iindex++) {
        const element = arr[iindex];
        for (let jindex = 1 + iindex; jindex < arr.length; jindex++) {
            const innerElement = arr[jindex];

            const actualDiff = Math.abs(element - innerElement);
            if (actualDiff === diff && element > innerElement) {
                response.push({ [innerElement]: [element] });
            }
            if (actualDiff === diff && innerElement > element) {
                response.push({ [element]: [innerElement] });
            }

        }
    }


    response.sort((a, b) => Number(Object.keys(a)[0])
        - Number(Object.keys(b)[0]));
    return response;
}

export function calculatePairIntegerMap(arr: number[], diff: number): {}[] {

    const pairMap = new Map();
    const response: {}[] = [];

    return [];
}