const fetch = require('node-fetch');

let url = 'https://api.github.com/users/jhonatan98rios'

let promise = fetch(url)

promise.then(data => data.json()).then(data => console.log(data))
