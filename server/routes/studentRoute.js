import { Router } from "express";
import { getStudent,getStudentbyid,addstd,updatestd, deleteStd } from "../controllers/studentsControllers.js";

const studentRoute = Router();

studentRoute.get("/students",getStudent);
studentRoute.get("/students/:id",getStudentbyid);
studentRoute.post("/addstd",addstd);
studentRoute.put("/updatestd/:id",updatestd);
studentRoute.delete("/deletestd/:id",deleteStd);

export default studentRoute;