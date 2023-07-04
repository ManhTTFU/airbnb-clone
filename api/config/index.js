const mongoose = require('mongoose')

async function connect() {
    try {
        // Connect to the MongoDB cluster
        const mongoAtlasUri = `mongodb://admin:b15dcpt082@localhost:27017/airbnb?retryWrites=true&w=majority&authSource=admin`
        await mongoose.connect(mongoAtlasUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            connectTimeoutMS: 3000,
        })
        console.log(' Mongoose is connected')
    } catch (e) {
        console.log(e)
        console.log('could not connect')
    }
}

module.exports = { connect }
