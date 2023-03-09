export const rundomNumber = (max: number) => {
    const number: number = Math.round(Math.random() * (max - 1) + 1)
    return number
}

export const multiplication = (a:number, b:number) => {
    return a * b
}

export const createVariants = (answer: number) =>{
    const arr = [];
    for ( let i = 1; i < 6; i++){
        let number = rundomNumber(5)
        i >= 3 ? arr.push(answer - number) : arr.push(answer + number)

    }
    arr.push(answer)

    return createTwoDimensionalArray(shuffle(arr))
}

 const  shuffle = (array : number[]) => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); 
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array
  }
  
const createTwoDimensionalArray = (array: number[]) => {
    const result = [];
    for (let i = 0; i < array.length; i += 3) {
            result.push([ array[i], array[i+1], array[i+2] ]);
      }
      return result
}