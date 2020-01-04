const mongoose = require('mongoose')

if ( process.argv.length < 3 ) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://fullstack:${password}@cluster0-oymc4.mongodb.net/phonebook?retryWrites=true`

mongoose.connect(url, { useNewUrlParser: true })

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
  date: Date,
})

const Person = mongoose.model('Person', personSchema)

if (process.argv.length > 3) {
  const person = new Person({
    name: process.argv[3],
    number: process.argv[4],
    date: new Date(),
  })
  
  person.save().then(response => {
    console.log(`added ${response.name} number ${response.number} to phonebook`)
    mongoose.connection.close()
  })
} else {
  Person.find({}).then(persons => {
    console.log('phonebook: ')
    persons.forEach(person => {
      console.log(`${person.name} ${person.number} `)
    })
    mongoose.connection.close()
  })
}