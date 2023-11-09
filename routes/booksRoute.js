const express = require('express')
const router = express.Router()
const {addNewBook, displayAllBooks, updateBook, deleteBook} = require('../controllers/booksController')
const {validateISBN} = require('../controllers/validationController')


router.route('/').post(addNewBook).get(displayAllBooks).patch(updateBook).delete(deleteBook)
router.route('/validate').post(validateISBN)


module.exports = router