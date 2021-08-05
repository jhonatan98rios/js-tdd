function multiply(...args) {
  return args.reduce((acc, curr) => acc * curr)
}

function sum(...args) {
  return args.reduce((acc, curr) => acc + curr)
}


console.log(multiply(2,2,2,2))
console.log(sum(2,2,2,2))
