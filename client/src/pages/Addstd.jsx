import React from "react";

const Addstd = () => {

    const inputHandler = (e) => {
        const { name , value } = e.target;
        console.log(name,value)
    }

    const submitHandler = (e) => {
        e.preventDefault();
    }

  return (
    <div className="h-screen rounded-2xl bg-[rgb(2,6,23)] w-[75%] p-2 mx-2 my-0.3 border-4 border-[#1E293B]">
      <h2 className="text-5xl text-white text-center">Add Records</h2>
      <div className="h-[85vh] w-full border-2 border-gray-700 mt-5 rounded-2xl p-9">
        <form onSubmit={submitHandler} autoComplete="off">
          <div className="grid grid-cols-1 h-[50vh] w-full place-items-center">
            <div className="flex justify-center items-start flex-col w-[90%]">
              <label className="text-white text-3xl" htmlFor="name">
                Name :
              </label>
              <input onChange={inputHandler}
                className="border-2 border-white rounded text-white p-3 m-4 w-[99%]"
                type="text"
                placeholder="Enter Student's Name"
                name="name"
                id="name"
              />
            </div>
            <div className="flex justify-center items-start flex-col w-[90%]">
              <label className="text-white text-3xl" htmlFor="address">
                Address :
              </label>
              <input onChange={inputHandler}
                className="border-2 border-white rounded text-white p-3 m-4 w-[99%]"
                type="text"
                placeholder="Enter Student's Address"
                name="address"
                id="address"
              />
            </div>
            <div className="flex justify-center items-start flex-col w-[90%]">
              <label className="text-white text-3xl" htmlFor="phNumber">
                PhNumber :
              </label>
              <input onChange={inputHandler} 
                className="border-2 border-white rounded text-white p-3 m-4 w-[99%]"
                type="text"
                placeholder="Enter Student's PhNumber"
                name="phNumber"
                id="phNumber"
              />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button type="submit"
              className="
            py-3 rounded-xl
            backdrop-blur-md bg-white/10
            border border-white/20
           text-cyan-300 font-medium
           hover:bg-white/20 hover:border-cyan-400
            transition-all duration-300  cursor-pointer w-[30%]
"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addstd;
