const mongoose = require('mongoose');
require('dotenv/config');

const DB_URI = process.env.DB_URI;

const connectDB = async () => {
    try{
        await mongoose.connect(DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Database Connected');
    } catch (err){
        console.log(err.message);
        process.exit(1);
    }
};



module.exports = connectDB;