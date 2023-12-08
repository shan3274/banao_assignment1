import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import image1 from "../../assets/img1.png";
const Login = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="w-full h-screen absolute top-0 left-0 bg-[rgba(0,0,0,0.4)] flex items-end lg:items-center lg:justify-center">
      <div className="lg:w-[60%] w-[100%] h-[60%] bg-white relative rounded-md drop-shadow-lg flex flex-col">
        <button
          className="absolute lg:right-[-30px] lg:top-[-30px] right-[5%] top-[5%] rounded-full lg:bg-white lg:text-black text-white bg-[rgba(0,0,0,0.4)] px-2 z-10"
          onClick={onClose}
        >
          X
        </button>

        <div className="lg:flex hidden w-[100%] h-[10%] bg-[#EFFFF4] rounded-md text-[13px] text-green-700  lg:flex-row flex-col items-center justify-center">
          Let's learn, share & inspire each other with our passion for computer
          engineering. Sign up now 🤘🏼
        </div>
        <div className="w-[100%] h-[90%] flex">
          <div className="lg:w-[50%] w-[100%] h-[100%] flex items-center justify-center relative flex-col">
            <div className="w-[90%] h-[90%] flex flex-col ">
              <label className="text-[25px] font-[400] hidden lg:block">
                Sign In
              </label>
              <label className="text-[25px] font-[400] lg:hidden">
                Welcome Back
              </label>
              <input
                type="email"
                className="w-[100%] h-[50px] border pl-2 text-[15px] mt-5"
                placeholder="Email"
              />
              <div className="relative">
                <input
                  type="password"
                  className="w-[100%] h-[50px] border pl-2 text-[15px"
                  placeholder="Password"
                />
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute right-2 top-2"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.75 9C2.0475 5.7075 5.25 3.375 9 3.375C12.75 3.375 15.9525 5.7075 17.25 9C15.9525 12.2925 12.75 14.625 9 14.625C5.25 14.625 2.0475 12.2925 0.75 9ZM15.615 9C14.3775 6.4725 11.8425 4.875 9 4.875C6.1575 4.875 3.6225 6.4725 2.385 9C3.6225 11.5275 6.1575 13.125 9 13.125C11.8425 13.125 14.3775 11.5275 15.615 9ZM9 7.125C10.035 7.125 10.875 7.965 10.875 9C10.875 10.035 10.035 10.875 9 10.875C7.965 10.875 7.125 10.035 7.125 9C7.125 7.965 7.965 7.125 9 7.125ZM5.625 9C5.625 7.14 7.14 5.625 9 5.625C10.86 5.625 12.375 7.14 12.375 9C12.375 10.86 10.86 12.375 9 12.375C7.14 12.375 5.625 10.86 5.625 9Z"
                    fill="#8A8A8A"
                  />
                </svg>
              </div>
              <div className="">
                <button className="mt-5 lg:w-[100%] w-[50%] rounded-full text-white bg-blue-600 h-[40px]">
                  Sign In
                </button>
                <button className="ml-10 lg:hidden">Create Account?</button>
              </div>
              <div className="w-[100%] h-[40%] flex flex-col items-center justify-center gap-4">
                <button className="flex items-center justify-center gap-2 border w-[100%] h-[40px]">
                  <span className=" text-blue-600">
                    <FaFacebook />
                  </span>{" "}
                  Sign In With Facebook
                </button>
                <button className="flex items-center justify-center gap-2 border w-[100%] h-[40px]">
                  <FaGoogle />
                  Sign In With Google{" "}
                </button>
              </div>
            </div>
            <button className="absolute bottom-4">Forget Password?</button>
          </div>
          <div className="w-[50%] h-[100%] hidden lg:block">
            <p className="text-[13px] mt-5">
              Don’t have an account yet?{" "}
              <button className="text-blue-500">Create new for free</button>
            </p>
            <img src={image1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
