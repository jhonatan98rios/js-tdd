
const data = {
  name: 'Jhonatan',
  surname: 'Teixeira'
}

const { name, surname: secondName } = data

console.log(`${name} ${secondName}`)

let [a, b, c] = [1, 2, 3]

console.log(a, b, c)
