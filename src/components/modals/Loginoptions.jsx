import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

const Loginoptions = ({ open, onClose }) => {
  if (!open) return null;

  const [openModalLogin, setOpenModalLogin] = useState(false);
  const [openModalSignup, setOpenModalSignup] = useState(false);
  return (
    <>
      <div className="absolute lg:right-20 right-5 top-20 w-[200px] h-[150px] bg-white drop-shadow-md rounded-md border z-50">
        <div className="w-[100%] h-[100%] relative flex items-start justify-center flex-col  text-[17px] gap-5">
          <button className="absolute right-2 top-2" onClick={onClose}>
            X
          </button>
          <button
            className=" w-[100%] hover:bg-gray-200 py-3"
            onClick={() => setOpenModalLogin(!openModalLogin)}
          >
            Login
          </button>
          <button
            className="w-[100%] hover:bg-gray-200 py-3"
            onClick={() => setOpenModalSignup(!openModalSignup)}
          >
            Signup
          </button>
        </div>
      </div>
      <Login open={openModalLogin} onClose={() => setOpenModalLogin(false)} />
      <Signup
        open={openModalSignup}
        onClose={() => setOpenModalSignup(false)}
      />
    </>
  );
};

export default Loginoptions;
