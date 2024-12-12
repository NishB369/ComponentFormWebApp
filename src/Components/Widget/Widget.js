import React from "react";
import image from "../../../image.png"

const Widget = () => {
  return (
    <div className="w-full border-2 border-black px-8 py-4 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-2 bg-blue-800 relative">
      <div className="left_div border-2 border-red-500 sm:w-[73%] flex flex-col items-start justify-center gap-4">
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
      <div className="right_div border-2 border-red-500 w-full sm:w-[25%] sm:absolute sm:bottom-0 right-[2.5%] sm:h-full h-64 flex items-center justify-center">
        {/* default nature bottom 0 */}
        {/* <img src={image} className="bottom-0 absolute"/> */}
        {/* functionaly center */}
        <img src={image} className="object-contain object-center"/>
      </div>
    </div>
  );
};

export default Widget;
