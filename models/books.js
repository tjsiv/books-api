//declars
const mongoose = require('mongoose')

//schema shorthand
const { Schema } = mongoose

//schema
const booksSchema = new Schema({
    title: {type: string, required: true},
    description: string,
    year: Number,
    quantity: Number,
    image: { type: String, default: 'http://placehold.it/500x500.png' }

})

const Book = mongoose.model('Book', booksSchema)


module.exports = Book