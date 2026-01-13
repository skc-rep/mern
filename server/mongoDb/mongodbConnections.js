import mongoose from "mongoose";

const mongodbConnect = async () =>{
    try {
        await mongoose.connect(`${process.env.DB_URI}/stdRec`);
        console.log("MongoDb connected successfully !!!");
    } catch (error) {
        console.log(error);
    }
}


export default mongodbConnect;