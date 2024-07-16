import asyncWrapper from '../middleware/asyncWrapper.js';
import {Task} from '../models/taskModel.js';

export const addTask = asyncWrapper (async(req,res) => {
    await Task.create(req.body);
    res.status(200)
    .json({
        msg:"Task Scheduled Successfully"
    })
})

export const getTask = async(req,res) => {
    try {
        const{id} = req.params;
        const task = await Task.findById(id);
        if(task){
            return res.status(200)
            .json({

            })
        }
    } catch (error) {
        
    }
}

export const updateTask = (req,res) => {
    res.send("Add Task");
}

export const removeTask = (req,res) => {
    res.send("Add Task");
}

export const showAllTask = (req,res) => {
    res.send("Add Task");
}