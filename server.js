//depends
const express = require('express')
const mongoose = require('mongoose')
const app = express()

// CONFIGURATION
require('dotenv').config();
const PORT = process.env.PORT;
app.use(express.json())

//mongoose call
mongoose.connect(process.env.MONGO_URI)


app.get('/', (req, res) => {
    res.send('want a book?')
})


const booksController = require('./controllers/books_controller')
app.use('/books', booksController)

// LISTEN
app.listen(PORT, () => {
    console.log('listening on port', PORT);
});