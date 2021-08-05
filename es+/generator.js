const fetch = require('node-fetch');

function* getNames() {
  yield 'Jhonatan'

  yield 'Teixeira'

  yield 'Rios'
}

const names = getNames()

console.log(names.next().value)
console.log(names.next().value)
console.log(names.next().value)


function ajax(url) {
  fetch(url)
    .then(data => data.json())
    .then(data => dados.next(data))
}

function* ajaxGen() {
  console.log('Buscando 1')
  const posts1 = yield ajax('https://api.github.com/users/jhonatan98rios')
  console.log(posts1)


  console.log('Buscando 2')
  const posts2 = yield ajax('https://api.github.com/users/jhonatan98rios')
  console.log(posts2)
}

const dados = ajaxGen()
dados.next()

