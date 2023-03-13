import { createStore } from 'redux'
import * as func from "../functions/Math.functions"
import {checkAnswer } from "../functions/logic.functions"
import { FILL_ARRAY, CHECK_ANSWER} from "./actionCreators"




const initialState: NumbersState = {
    mathState: {
        numbers: [[],[]],
        numberA: null,
        numberB: null,
        answer: 0,
        isRight: undefined,
    },
    score: 0,
    attempts: 0,
}

const  rootReducer = (state = initialState, action: NumberAction): NumbersState =>{
switch (action.type) {
    case FILL_ARRAY: {

        const numberA = func.rundomNumber(action.number);
        const numberB = func.rundomNumber(action.number);
        const answer = func.multiplication(numberA, numberB)
        let numbers = func.createVariants(answer)
        let result = {
            numbers,
            numberA,
            numberB,
            answer,
            isRight: undefined
        }
  
         return {...state, mathState: result}
    }
    case CHECK_ANSWER: {
        const copyState = {...state}
        copyState.mathState.isRight = checkAnswer(action.number, state.mathState.answer)
            if ( copyState.mathState.isRight) {
                copyState.score++;
                copyState.attempts++;
            } else copyState.attempts++


        return copyState
    }

    default:
        return state
}
}


let store = createStore(rootReducer)
export default store