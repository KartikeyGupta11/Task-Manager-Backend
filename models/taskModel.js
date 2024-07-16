import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Enter Name"],
        trim:true,
        maxlength:[20,"Name Can't be more than 20 char"]
    },

    completed:{
        type:Boolean,
        default:false,
    },
},
{
    timestamps:true,
}
);

export const Task = mongoose.model('Task',taskSchema);