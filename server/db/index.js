const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://dbUser:dbUser@cluster0.5xjub.mongodb.net/Database?retryWrites=true&w=majority', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db