// comments /* -- */
document.write('hello')

// variaveis, tipos de dados
var myvar = "Hello"
let mylet = "HellOw"
const myconst = "he"
document.write(myconst + myvar)

// string
"isso é uma string"
'isso é uma string'
`isso é uma string`

//number 
const n1 = 1
const n2 = 12
document.write(n1 + n2)

// boolean - true or false
const bTrue = true
const bFalse = false
document.write(bTrue)

// objeto - possuem propriedades e funcionalidades

const people = {
    height: "1,80m",
    age: 24,
    single: true,
    correr() {
        document.write("run forest")
    }
}

people.correr() // or document.write(people.correr())

Array - vetores
const BallCollection = ["blue", "green", 1, { name: "My Name" }]
document.write(BallCollection[3].name)

// Functions - Features - Shortcuts - Code Reuse

// Register Function
function sayMyName(name) {
    document.write(name)
}
// execute
sayMyName('Amanda Katariny')
sayMyName('Joao')


// condicionais
const noteEnd = 4

if (noteEnd < 5) {
    document.write('disapproved')
} else {
    document.write('okay')
}

//loop  repeat
for (let i = 0; i < 10; i++) {
    document.write(`<p> Alô + ${i}</p>`)
}