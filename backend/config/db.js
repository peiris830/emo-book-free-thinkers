const mongodb = require('mongodb');
const mongoose = require('mongoose');
const path = require("path");
require('dotenv').config({path: path.resolve(__dirname, '../.env')});

const connectDB = async () => {
    try {
        /*const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
            .then(() => console.log('MongoDB Connected'));

        console.log(`MongoDB Connected: ${conn.connection.host}`);*/
        const client = await mongodb.MongoClient.connect(process.env.MONGO_URI)
            /*.then(() => console.log('MongoDB Connected'));*/
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

module.exports = connectDB;