import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import serverRoute from "./routes/serverRoute.js";
import mongodbConnect from "./mongoDb/mongodbConnections.js";

dotenv.config({
    path:"./.env"
})

const app = express();
const PORT = process.env.PORT || 3000;



app.use(express.json());
app.use(cors());
app.use(serverRoute);

app.get("/",(req,res) => {
    res.send("Hello");
})

mongodbConnect();

app.listen(PORT,()=>{
    console.log("Server Started !!!");
})