const mongoose = require("mongoose")

const connectDB = async (uri) => {
    try {
        await mongoose.connect(uri);
        console.log("Connected to database successfully")
    } catch (err) {
        console.error(err)
    }
}

module.exports = connectDB