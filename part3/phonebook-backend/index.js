require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

const Person = require('./models/person')

app.use(express.static('build'))
app.use(bodyParser.json())

morgan.token('body', (req, res) => {
  return JSON.stringify(req.body)
})
app.use(morgan(`:method :url :status :res[content-length] - :response-time ms :body`))
app.use(cors())

let persons = [
  {
    name: "Arto Hellas",
    number: "040-123456",
    id: 1
  },
  {
    name: "Ada Lovelace",
    number: "39-44-5323523",
    id: 2
  },
  {
    name: "Dan Abramov",
    number: "12-43-234345",
    id: 3
  },
  {
    name: "Mary Poppendieck",
    number: "39-23-6423122",
    id: 4
  }
]

app.get('/api/persons', (request, response) => {
  Person.find({}).then(persons => {
    response.json(persons)
  })
})

app.get('/api/persons/:id', (request, response) => {
  Person.findById(request.params.id).then(person => {
    response.json(person)
  })
})

app.post('/api/persons', (request, response) => {
  const body = request.body

  if (!body.name || !body.number) {
    return response.status(400).json({
      error: 'Ther name of number missing'
    })
  } else if (persons.find(p => p.name === body.name)) {
    return response.status(400).json({
      error: `The ${body.name} already exists in the phonebook`
    })
  }

  const person = new Person({
    name: body.name,
    number: body.number
  })
  person.save().then(savedPerson => {
    res.json(savedPerson.toJSON())
  })
})

app.delete('/api/persons/:id', (request, response) => {
  Person.findByIdAndRemove(request.params.id).then(result => {
    response.status(204).end()
  })
})

app.get('/info', (request, response) => {
  const count = persons.length
  const date = new Date()
  const result = `<p>Phonebook has info for ${count} people<p><p>${date}</p>`

  response.send(result)
})

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})