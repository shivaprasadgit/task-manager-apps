const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://shiva123:shiva123@shivaprasad-l5j7k.mongodb.net/test?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})