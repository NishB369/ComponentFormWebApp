import React from "react";
import image from "../../../image.png";

const data = [
  {
    heading: "Welcome to Our Platform",
    subheading: "Explore endless opportunities",
    desc: "Discover a wide range of resources and tools designed to help you achieve your goals efficiently and effectively.",
    main_btn_txt: "Register Now",
    share_btn_txt: "Share with Friends",
    descActive: false,
    main_btnActive: false,
    share_btnActive: false,
  },
  {
    heading: "Start Your Journey",
    subheading: "Your success begins here",
    desc: "Join thousands of learners and professionals who are making significant strides in their personal and professional lives.",
    main_btn_txt: "Get Started",
    share_btn_txt: "Invite Others",
    descActive: true,
    main_btnActive: false,
    share_btnActive: true,
  },
  {
    heading: "Unlock New Possibilities",
    subheading: "Discover innovative solutions",
    desc: "Dive into our comprehensive suite of services that cater to a variety of needs and help you push your boundaries.",
    main_btn_txt: "Learn More",
    share_btn_txt: "Spread the Word",
    descActive: false,
    main_btnActive: true,
    share_btnActive: false,
  },
  {
    heading: "Join Our Community",
    subheading: "Be part of something bigger",
    desc: "Connect with like-minded individuals, share knowledge, and grow together in an environment that fosters collaboration.",
    main_btn_txt: "Sign Up Today",
    share_btn_txt: "Refer Friends",
    descActive: true,
    main_btnActive: true,
    share_btnActive: false,
  },
  {
    heading: "Take the First Step",
    subheading: "Start small, dream big",
    desc: "Begin your journey with us and experience the difference that focused effort and determination can make.",
    main_btn_txt: "Begin Now",
    share_btn_txt: "Share Your Journey",
    descActive: false,
    main_btnActive: false,
    share_btnActive: false,
  },
  {
    heading: "Achieve Your Goals",
    subheading: "Step into a brighter future",
    desc: "With the right guidance and tools, nothing is out of reach. Let us help you reach new heights.",
    main_btn_txt: "Move Forward",
    share_btn_txt: "Tell Others",
    descActive: true,
    main_btnActive: true,
    share_btnActive: false,
  },
];

const Widget = () => {
  return (
    <div className="w-full border-2 border-black px-8 py-10 rounded-lg flex flex-col sm:flex-row items-center justify-between sm:gap-2 gap-8 bg-blue-800 relative">
      <div className="left_div sm:w-[70%] flex flex-col items-start justify-center gap-4">
        <div className="main_heading">
          <h1 className="font-bold text-4xl text-white drop-shadow-lg">
            {data[3].heading}
          </h1>
        </div>
        <div className="sub_heading">
          <h3 className="font-semibold text-xl text-white">
            {data[3].subheading}
          </h3>
        </div>
        {data[3].descActive ? (
          <div className="description">
            <p className="font-normal text-lg text-gray-200">{data[3].desc}</p>
          </div>
        ) : (
          ""
        )}
        {data[3].main_btnActive ? (
          <div className="main_btn">
            <button className="bg-white py-4 px-6 rounded-md shadow-lg font-bold">
              {data[3].main_btn_txt}
            </button>
          </div>
        ) : (
          ""
        )}
        {data[3].share_btnActive ? (
          <div className="share_btn">
            <button className="bg-white p-2 px-4 rounded-md shadow-lg text-sm">
              {data[3].share_btn_txt}
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="right_div sm:w-[25%] h-full absolute right-[2.5%] flex items-end justify-center">
        <img src={image} className="h-[90%] w-full object-center object-cover" />
      </div>
    </div>
  );
};

export default Widget;
