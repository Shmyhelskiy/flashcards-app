type NumbersState = {
    numbers: number[][],
    numberA: null | number,
    numberB: null | number,
}

type NumberAction = {
    type: string,
    maxNumber: number,
}