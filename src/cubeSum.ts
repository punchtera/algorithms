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
                    }
                }
            }

        }
    }
}

export function cubeSumOThree() {
    const limit = 50;
    let counter = 0;
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
                    counter += 1;
                }
            }
        }
    }
}

