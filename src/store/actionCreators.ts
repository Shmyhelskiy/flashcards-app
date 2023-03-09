import * as actionTypes from "./actionTypes"

export const fillArray  = (maxNumber: number) => {
    return {
        type: actionTypes.FILL_ARRAY,
        maxNumber,
    }
}