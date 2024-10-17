const Task = require('../models/Task')


const getAllTasks = async (req, res) => {
    try {
        const task = await Task.find({})
        res.status(200).send({ task })
    } catch (error) {
        res.status(500).send({ "error": error })
    }
}

const createTask = async (req, res) => {
    // res.send("create task")
    // res.json(req.body);
    try {
        const task = await Task.create(req.body);
        res.status(200).json({ task });
    } catch (error) {
        res.status(500).json({ "error": error.message });
    }
}

const getTask = async (req, res) => {
    try {
        const id = req.params.id;
        const task = await Task.findById(id);
        if (!task) {
            return res.status(404).send({ "msg": "Task not Found" })
        }
        res.status(200).send(task);
    } catch (error) {
        res.status(500).send({ "error": error })
    }
}

const updateTask = async (req, res) => {
    try {
        const id = req.params.id;
        const updates = req.body;
        const task = await Task.findByIdAndUpdate(id, updates, { new: true, runValidators: true });
        if (!task) {
            return res.status(404).send({ "msg": "Task not Found" })
        }
        res.status(200).send(task);
    } catch (error) {
        res.status(500).send({ "error": error })
    }
}

const deleteTask = async (req, res) => {
    try {
        const id = req.params.id;
        const task = await Task.findByIdAndDelete(id);
        if (!task) {
            return res.status(404).send({ "msg": "Task not Found" })
        }
        res.status(200).send(task);
    } catch (error) {
        res.status(500).send({ "error": error })
    }
}

module.exports = {
    getAllTasks, createTask, getTask, updateTask, deleteTask
}