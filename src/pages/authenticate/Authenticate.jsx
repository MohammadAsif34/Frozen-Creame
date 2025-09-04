import React, { useState } from "react";
import { LoginForm } from "../../components/authenticate/LoginForm";
import { RegisterForm } from "../../components/authenticate/RegisterForm";

const Authenticate = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <>
      <div className="w-full min-h-[85vh] px-[12%] py-8 text-white bg-gray-50">
        <div className="w-fit mx-auto p-1 bg-rose-400 rounded-full flex gap-3 transition-all duration-500">
          <button
            className={`min-w-40 max-w-50 px-4 py-1 ${
              isLogin && "bg-rose-50 cursor-default! text-rose-400"
            } rounded-full cursor-pointer transition duration-500`}
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
            <div className="pt-5">
              <LoginForm />
            </div>
          </>
        ) : (
          <>
            <div className="pt-5">
              <RegisterForm />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Authenticate;
