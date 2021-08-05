/* const FizzBuzz = (num) => {
  if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz'
  if (num % 3 === 0) return 'Fizz'
  if (num % 5 === 0) return 'Buzz'
  return num
} */

const FizzBuzz = num => {
  return (num === 0) ? num :
         (num % 3 === 0 && num % 5 === 0) ? 'FizzBuzz' : 
         (num % 3 === 0) ? 'Fizz' : 
         (num % 5 === 0) ? 'Buzz' : num
}

const foo = () => {
  return 2 + 2
}

export default FizzBuzz 
