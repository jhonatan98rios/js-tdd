const city = 'Dublin'
const something = 'Guinness'
const otherThing = 'Leprechaums'

function green(template, ...values) {
  
  return template.reduce((acc, part, i) => {
    return `
      ${acc}*
      ${values[i-1]}
      ${part}*
    `
  })

}

const ireland = green`I've in ${city} the city of ${something} and ${otherThing}`

console.log(ireland)
