export function cubeSumBruteForce() {
    const limit = 1000;
    for (let indexa = 1; indexa < limit; indexa++) {
        for (let indexb = 1; indexb < limit; indexb++) {
            for (let indexc = 0; indexc < limit; indexc++) {
                for (let indexd = 0; indexd < limit; indexd++) {
                    const beforeEqual = Math.pow(indexa, 3) + Math.pow(indexb, 3);
                    const afterEqual = Math.pow(indexc, 3) + Math.pow(indexd, 3);

                    if (beforeEqual === afterEqual) {
                        console.log(indexa, indexb, indexc, indexd);
                        break;
                    }
                }
            }

        }
    }
}

export function cubeSumOThree() {
    const limit = 50;
    for (let indexa = 1; indexa < limit; indexa++) {
        for (let indexb = 1; indexb < limit; indexb++) {
            for (let indexc = 1; indexc < limit; indexc++) {
                const indexaAtThree = Math.pow(indexa, 3);
                const indexbAtThree = Math.pow(indexb, 3);
                const indexcAtThree = Math.pow(indexc, 3);
                const indexdAtThree = indexaAtThree + indexbAtThree - indexcAtThree;
                const d = Math.round(Math.pow(indexdAtThree, 1 / 3));

                const beforeEqual = indexaAtThree + indexbAtThree;
                const afterEqual = indexcAtThree + indexdAtThree;

                if (beforeEqual === afterEqual && 0 <= d && d <= limit) {
                    console.log(indexa, indexb, indexc, d);
                }
            }
        }
    }
}

export function cubeSumOTwo() {
    const limit = 50;
    const memoryMap = new Map<number, {}[]>();
    for (let indexa = 1; indexa < limit; indexa++) {
        for (let indexb = 1; indexb < limit; indexb++) {
            const result = Math.pow(indexa, 3) + Math.pow(indexb, 3);
            const memoryEntry = memoryMap.get(result);

            if (memoryEntry === undefined) {
                memoryMap.set(result, [{ [indexa]: indexb }]);
            }
        }
    }

    memoryMap.forEach((pairsArray, _key) => {
        for (let indexa = 0; indexa < pairsArray.length; indexa++) {
            for (let indexb = 0; indexb < pairsArray.length; indexb++) {
                const firstElKey = Object.keys(pairsArray[indexa])[0];
                const firstElValue = (pairsArray[indexa] as any)[firstElKey];
                const lastElKey = Object.keys(pairsArray[indexb])[0];
                const lastElValue = (pairsArray[indexb] as any)[lastElKey];

                console.log(`pairsArray: ${firstElKey}, ${firstElValue}, ${lastElKey}, ${lastElValue}`);
            }
            const element = pairsArray[indexa];

        }
    });
}

