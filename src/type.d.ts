type NumbersState = {
mathState: mathState, 
score: number,
attempts: number,
}

type NumberAction = {
    type: string,
    number: number,
}
type mathState = {
    numbers: number[][],
    numberA: null | number,
    numberB: null | number,
    answer: number,
    isRight:  boolean | undefined
}