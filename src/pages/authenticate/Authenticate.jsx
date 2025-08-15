import React, { useState } from "react";
import LoginForm from "../../components/form/LoginForm";
import RegisterForm from "../../components/form/RegisterForm";

const Authenticate = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <>
      <div className="w-full min-h-[85vh] px-[12%] text-white bg-gray-50">
        <div className="w-fit mx-auto p-1 mt-8 mb-4 bg-rose-400 rounded-full flex gap-3">
          <button
            className={`min-w-40 max-w-50 px-4 py-1 ${
              isLogin && "bg-rose-50 cursor-default! text-rose-400"
            } rounded-full cursor-pointer transition dura tion-500`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`min-w-40 max-w-50 px-4 py-1 ${
              !isLogin && "bg-rose-50 cursor-default! text-rose-400"
            } rounded-full cursor-pointer transition-transform durat ion-500`}
            onClick={() => setIsLogin(false)}
          >
            Register
          </button>
        </div>
        {/* form  */}
        {isLogin ? (
          <>
            <div className="pb-10">
              <LoginForm />
            </div>
          </>
        ) : (
          <>
            <div className="pb-10">
              <RegisterForm />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Authenticate;
