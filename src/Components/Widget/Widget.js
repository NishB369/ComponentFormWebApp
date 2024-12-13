import React from "react";
import image from "../../../img3.png";


const Widget = (props) => {
  const {data} = props
  return (
    <div className="w-full border-2 border-black px-8 sm:py-10 pt-10 rounded-lg flex flex-col sm:flex-row items-center justify-between sm:gap-2 gap-8 bg-blue-800 relative">
      <div className="left_div sm:w-[50%] flex flex-col items-start justify-center gap-4 md:w-[65%] lg:w-[70%]">
        <div className="main_heading">
          <h1 className="font-bold text-4xl text-white drop-shadow-lg">
            {data.heading}
          </h1>
        </div>
        <div className="sub_heading">
          <h3 className="font-semibold text-xl text-white">
            {data.subheading}
          </h3>
        </div>
        {data.descActive ? (
          <div className="description">
            <p className="font-normal text-md text-gray-200">{data.desc}</p>
          </div>
        ) : (
          ""
        )}
        {data.main_btnActive ? (
          <div className="main_btn">
            <button className="bg-white py-4 px-6 rounded-md shadow-lg font-bold">
              {data.main_btn_txt}
            </button>
          </div>
        ) : (
          ""
        )}
        {data.share_btnActive ? (
          <div className="share_btn">
            <button className="bg-white p-2 px-4 rounded-md shadow-lg text-sm">
              {data.share_btn_txt}
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="right_div h-full sm:absolute sm:right-[2.5%] flex items-center justify-center sm:max-w-[40%] md:max-w-[35%] lg:max-w-[25%]">
        <img src={image}  className="h-[90%] w-full object-top object-cover" />
      </div>
    </div>
  );
};

export default Widget;