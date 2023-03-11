export const FILL_ARRAY = "FILL_ARRAY"
export const CHECK_ANSWER = "CHECK_ANSWER"
export const REFRESH_CARD = "REFRESH_CARD"

export const fillArray  = (number: number) => {
    return {
        type: FILL_ARRAY,
        number,
    }
}

export const giveResult = (number:number) =>{
    return {
        type: CHECK_ANSWER,
        number
    } 
}
