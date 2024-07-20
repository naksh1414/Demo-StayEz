import { useState } from "react";
import LoginImg from "../../assets/LOgin.png";
import or from "../../assets/or.png";
import { FcGoogle } from "react-icons/fc";
import { NavLink } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <main>
      <div className="w-full flex">
        <div className="hidden md:flex md:w-[50%]">
          <img
            className="object-cover w-full h-[900px]"
            src={LoginImg}
            alt=""
          />
        </div>
        <div className="w-full md:w-[50%] flex flex-col items-center">
          <h1 className="text-[2rem] md:text-[2.5rem] lg:text-[5rem] text-white mt-10 font-semibold">
            Welcome Back
          </h1>
          <div className="h-[700px] md:w-[400px] flex-col items-center flex mt-10">
            <h1 className="text-[#03A9F4] text-[2rem] font-bold mt-5">Login</h1>
            <h2 className="text-white mt-4">Please enter your Details</h2>
            <input
              className="my-5 h-10 rounded-[10px] p-5 placeholder:text-[black]"
              placeholder="✉ Enter Email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="my-5 h-10 rounded-[10px] p-5 placeholder:text-[black]"
              placeholder="🔒 Enter password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="flex justify-between w-[78%] md:w-[80%]">
              <h1></h1>
              <h2 className="text-[#03A9F4]">Forgot Password ?</h2>
            </div>

            <div className="mt-5 flex flex-col">
              <button className="bg-[#03A9F4] text-white rounded-[10px] font-semibold px-8 py-3 mt-5">
                Login
              </button>
              <h1 className="text-white mt-4">
                Don&apos;t Have an Account ?
                <NavLink to="/register">
                  <button>
                    <span className="text-[#03A9F4]"> Sign Up !</span>
                  </button>
                </NavLink>
              </h1>
            </div>
            <div className="mt-10">
              <img className="md:h-20  md:object-contain" src={or} alt="" />
            </div>
            <div className="mt-10">
              <button className="text-white flex items-center space-x-3 py-2 px-5 border-2 border-white/40 rounded-2xl">
                <FcGoogle className="h-10 w-16"></FcGoogle> Sign In with Google
                Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
