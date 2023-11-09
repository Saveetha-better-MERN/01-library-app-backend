const booksModel = require('../models/bookModel')

const validateISBN = async(request, response) => {
    const bookToBeValidated = request.body.ISBN;
    
    try
    {
        const validISBN = await booksModel.findOne({ISBN:bookToBeValidated})
        if (validISBN)
        {
            return response.status(200).json(validISBN)
        }
        response.status(400).json({message:'Invalid ISBN Number ...'})
    }
    catch(error)
    {
        response.status(500).json({message : error.message})
    }

}

module.exports = {validateISBN}