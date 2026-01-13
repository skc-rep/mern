import { std } from "../models/studentModels.js";

export const getStudent = async (req, res) => {
  try {
    const student = await std.find();
    return res.send(student);
  } catch (error) {
    console.log(error);
  }
};

export const getStudentbyid = async (req, res) => {
  const {
    params: { id },
  } = req;

  try {
    const stdbyid = await std.findById(id);
    return res.send(stdbyid);
  } catch (error) {
    console.log(error);
  }
};

export const addstd = async (req, res) => {
  const { body } = req;
  const newStd = new std(body);

  const { phnumber } = newStd;
  const findStdOfPhnumber = await std.findOne({ phnumber });

  if (findStdOfPhnumber)
    return res.send({ message: "Student Already Exist With Same Phn Number" });

  try {
    const savedStd = await newStd.save();
    return res.send(savedStd);
  } catch (error) {
    console.log(error);
  }
};

export const updatestd = async (req, res) => {
  const {
    params: { id },
    body,
  } = req;

  try {
    const stdById = await std.findById(id);
    if (!stdById) return res.status(404).send("std Doesnot Exist");

    const stdUpdate = await std.findByIdAndUpdate(id, body, { new: true });

    return res.status(200).send({message : "Updated SuccessFully in the record !!!"});
  } catch (error) {
    console.log(error);
  }
};


export const deleteStd = async(req,res) => {
    const {
    params: { id }
  } = req;

  try {
    await std.findByIdAndDelete(id);
    return res.send({message : "Deleted SuccessFully !!! "});
  } catch (error) {
    console.log(error);
  }
}