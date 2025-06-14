const mongoose = require('mongoose');

const connectDB = () => {
    try {
        mongoose.connect(process.env.MONGO_URL)
        console.log("mongodb connected")
    } catch (e) {
        console.log(e);
    }
}

module.exports = { connectDB }