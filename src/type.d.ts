type NumbersState = {
    numbers: number[][],
    numberA: null | number,
    numberB: null | number,
    answer: number,
    isRight:  boolean | undefined
}

type NumberAction = {
    type: string,
    number: number,
}
