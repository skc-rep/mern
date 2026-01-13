import { Router } from "express";
import studentRoute from "./studentRoute.js";

const serverRoute = Router();

serverRoute.use("/api",studentRoute);



export default serverRoute;