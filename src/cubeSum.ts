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

