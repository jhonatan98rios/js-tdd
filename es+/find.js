const data = [
  {
    name: 'Jhonatan',
    age: 23
  },
  {
    name: 'Beatriz',
    age: 22
  },
  {
    name: 'Kitty',
    age: 4
  },
]

const kiki = data.find(person => person.name == 'Kitty')

console.log(kiki)
