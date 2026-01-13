import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        address:{
            type:String,
            required:true
        },
        phnumber:{
            type:String,
            required:true,
            unique:true
        }

    }
)

export const std = mongoose.model("std",studentSchema)