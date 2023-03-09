import { createStore } from 'redux'
import {FILL_ARRAY} from "./actionTypes"

type NumbersState = {
    numbers: number[],
    numberA: null | number,
    numberB: null | number,
}

type NumberAction = {
    type: string,
    payload?: any,
}

const initialState: NumbersState = {
    numbers: [],
    numberA: null,
    numberB: null,
}

const  rootReducer = (state = initialState, action: NumberAction): NumbersState | undefined =>{
switch (action.type) {
    case FILL_ARRAY: {
        console.log("done")
        return { 
            numbers: [],
            numberA: null,
            numberB: null,
        }
    }
    default:
        return state
}
}

let store = createStore(rootReducer)
export default store