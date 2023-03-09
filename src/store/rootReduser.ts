import { createStore } from 'redux'
import {FILL_ARRAY} from "./actionTypes"
import * as func from "../functions/Math.functions"




const initialState: NumbersState = {
    numbers: [],
    numberA: null,
    numberB: null,
}

const  rootReducer = (state = initialState, action: NumberAction): NumbersState =>{
switch (action.type) {
    case FILL_ARRAY: {

        const numberA = func.rundomNumber(action.maxNumber);
        const numberB = func.rundomNumber(action.maxNumber);
        const answer = func.multiplication(numberA, numberB)
        const numbers = func.createVariants(answer)
        const result = {
            numbers,
            numberA,
            numberB
        }
        return result
    }
    default:
        return state
}
}

let store = createStore(rootReducer)
export default store