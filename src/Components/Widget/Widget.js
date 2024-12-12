import React from "react";
import image from "../../../image.png"

const Widget = () => {
  return (
    <div className="w-full border-2 border-black px-8 py-4 rounded-lg flex items-center justify-between gap-4 bg-blue-800">
      <div className="left_div border-2 border-red-500 w-[75%] flex flex-col items-start justify-center gap-4">
          <div className="main_heading">
            <h1 className="font-bold text-4xl text-white drop-shadow-lg">PW REAL Test Series for JEE and NEET</h1>
          </div>
          <div className="sub_heading">
            <h3 className="font-semibold text-xl text-white">Right Evaluation & Assessment for Learning</h3>
          </div>
          <div className="description">
            <p className="font-normal text-lg text-gray-200">lorem ipsum dior pojerjop</p>
          </div>
          <div className="main_btn">
            <button className="bg-white py-4 px-6 rounded-md shadow-lg font-bold">Register/Login</button>
          </div>
          <div className="share_btn">
            <button className="bg-white p-2 px-4 rounded-md shadow-lg text-sm">Share with Friends</button>
        </div>
      </div>
      <div className="right_div border-2 border-red-500 w-[25%]">
        <img src={image}/>
      </div>
    </div>
  );
};

export default Widget;
