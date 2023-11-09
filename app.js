require('dotenv').config()
const express = require('express')
const app = express()
const PORT = 3500

const mongoose = require('mongoose')
const cors = require('cors')
const bookRouter = require('./routes/booksRoute')

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.DB_URL)
const db = mongoose.connection
db.on('error', (errorMessage)=> console.log(errorMessage))
db.once('open', ()=> console.log('Connected successfully to the database...'))

app.use('/api/v1/books',bookRouter)

app.listen(PORT, console.log(`Server started running at http://localhost:${PORT}/api/v1/books`))