import React, { useEffect, useState } from "react";
import { NotebookPen, Trash2 } from "lucide-react";
import axios from "axios";
import { Link } from "react-router-dom";
import {toast} from "react-hot-toast";

const StudentRecordsBar = () => {
  const [students, setstudents] = useState([]);

  useEffect(() => {
    const getStudentFromBackend = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/students");
        setstudents(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getStudentFromBackend();
  }, []);

  const delte = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:4000/api/deletestd/${id}`
      );
      setstudents((prev) => prev.filter((std) => std._id !== id));
      toast.error(response.data.message, { position: "top-right" });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-screen rounded-2xl bg-[rgb(2,6,23)] w-[75%] p-2 mx-2 my-0.3 border-4 border-[#1E293B]">
      <h2 className="text-5xl text-white text-center">Records</h2>
      <div className="h-[85vh] w-full border-2 border-gray-700 mt-5 rounded-2xl overflow-scroll no-scrollbar overflow-x-hidden ">
        {students.length === 0 ? (
          <div className="h-full w-full flex justify-center items-center">
            <h2 className="text-6xl text-white">No records are added!!!</h2>
          </div>
        ) : (
          <div>
            <div className="h-15 w-[98%] rounded-2xl  p-2 m-3  border-2 border-gray-800 grid  grid-cols-5 place-items-center ">
              <h3 className="text-xl text-white">S.No</h3>
              <h3 className="text-xl text-white">Name</h3>
              <h3 className="text-xl text-white">Address</h3>
              <h3 className="text-xl text-white">PhNumber</h3>
              <h3 className="text-xl text-white">Actions</h3>
            </div>
            {students.map((std, index) => (
              <div
                key={index}
                className="h-15 w-[98%] rounded-2xl  p-2 m-3  bg-gray-900 grid  grid-cols-5 place-items-center "
              >
                <h3 className="text-xl text-white">{index + 1}</h3>
                <h3 className="text-xl text-white">{std.name}</h3>
                <h3 className="text-xl text-white">{std.address}</h3>
                <h3 className="text-xl text-white">{std.phnumber}</h3>
                <div className="text-xl text-white flex gap-3 cursor-pointer">
                  <Link to={"/upt/" + std._id}>
                    <NotebookPen color="yellow" />
                  </Link>{" "}
                  <Trash2 onClick={() => delte(std._id)} color="#ff0000" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentRecordsBar;
