const booksModel = require('../models/bookModel')
const initialData = require('../data/initialData')

const addNewBook = async(request, response) => {
    const newBook = request.body;
    console.log('hello');
    try{
        const existingBook = await booksModel.findOne({ISBN : newBook.ISBN})
        if(existingBook)
        {
            return response.status(409).json({message:'ISBN Number already exists.'})
        }
        const book = await booksModel.create(newBook)
        response.status(201).json(book)
    }catch(error)
    {
        response.status(500).json({message : error.message})
    }
}

const displayAllBooks = async(request, response)=> {

    try
    {
        const allBooks = await booksModel.find()
        if (allBooks.length === 0)
        {
            const initialBooks = await booksModel.insertMany(initialData)
        }
        response.status(200).json(allBooks)
    }
    catch(error)
    {
        response.status(500).json({message : error.message})
    }
}

const updateBook = async(request, response) => {
    const bookToBeUpdated = request.body
    try{
        const updatedBook = await booksModel.updateMany({ISBN:bookToBeUpdated.ISBN},bookToBeUpdated)
        response.status(200).json(updatedBook)
    }catch(error)
    {
        response.status(500).json({message : error.message})
    }
}

const deleteBook = async(request, response) => {
    const bookToBeDeleted = request.body
    try{
        const deletedBook = await booksModel.deleteOne({ISBN:bookToBeDeleted.ISBN})
        response.status(200).json(deletedBook)
    }catch(error)
    {
        response.status(500).json({message : error.message})
    }
}


module.exports = {addNewBook, displayAllBooks, updateBook, deleteBook}