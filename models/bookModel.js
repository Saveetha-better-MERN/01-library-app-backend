const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema(
    {
        bookName : {
            type : String,
            required : true
        },
        authorName : {
            type : String,
            required : true
        },
        ISBN : {
            type : Number,
            required : true,
            unique : true,
            index : true
        },
        genre : {
            type:String,
            required:true,
            enum : ["Fiction", "Non-Fiction", "Mystery", "Romance", "Science Fiction", "Fantasy", "Historical Fiction", "Thriller"]
        },
        availability: {
            type:String,
            default:"Available"
        }
    },
    {
        collection : 'books'
    }
)

module.exports = mongoose.model('books',bookSchema)