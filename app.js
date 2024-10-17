const express = require('express');
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();
const port = 3000;


//middleware
app.use(express.json());


//route-1 ==> /hello
app.get("/", (req, res) => {
    res.send("Task Manager Application");
})

//route-1 ==> /api/v1/tasks
app.use("/api/v1/tasks", tasks);

//connect to database
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`)
        })
    } catch (err) {
        console.error(err);
    }
}

start();
