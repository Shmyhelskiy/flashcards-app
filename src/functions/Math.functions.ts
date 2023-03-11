// create random number
export const rundomNumber = (max: number) => {
    const number: number = Math.round(Math.random() * (max - 1) + 1)
    return number
}
// create answer
export const multiplication = (a:number, b:number) => {
    return a * b
}
// create array of variants 
export const createVariants = (answer: number) =>{
    const arr: number[] = [];
    arr.push(answer)
    while ( arr.length < 6){
        let randomNumber = rundomNumber(answer)
        if ( !arr.includes(randomNumber)){
            arr.push(randomNumber)
        }
    }

    return createTwoDimensionalArray(shuffle(arr))
}
// mix array
 const  shuffle = (array : number[]) => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); 
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array
  }
// creat a two-dimensional array
const createTwoDimensionalArray = (array: number[]) => {
    const result = [];
    for (let i = 0; i < array.length; i += 3) {
            result.push([ array[i], array[i+1], array[i+2] ]);
      }
      return result
}

