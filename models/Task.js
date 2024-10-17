const mongoose = require("mongoose")

const TaskSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, "Name field cannot be empty"],
        trim : true,
        maxlength : [20, "Name cannot be more than 20 characters"],
        minlength : [3, "Name cannot be less than 3 characters"]
    },
    completed : {
        type : Boolean,
        default : false
    }
})

module.exports = mongoose.model("Task", TaskSchema)