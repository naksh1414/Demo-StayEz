import { useState } from "react";
import LoginImg from "../../assets/LOgin.png";
import or from "../../assets/or.png";
import { FcGoogle } from "react-icons/fc";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "https://847e-125-21-249-98.ngrok-free.app/main/login",
        { user: email, password: password },
        { withcredentials: true }
      );
      console.log("response", res);
      // Handle success response
      if (res.status === 200) {
        alert("Login successful");
        // Redirect to another page or do something else
      } else {
        setError(res.data.message || "Login failed ! Bad Network try again later !");
      }
    } catch (error) {
      console.error("Login error", error);
      setError("Bad Network Error Try again Later");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

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
          <h1 className="text-[2rem] md:text-[2.5rem] lg:text-[3.5rem] text-white mt-10 font-semibold">
            Welcome Back
          </h1>
          <div className="h-[700px] md:w-[400px] flex-col flex mt-5">
            <h1 className="text-[#03A9F4] text-[2.5rem] text-center font-bold mt-5">
              Login
            </h1>
            <form onSubmit={handleSubmit} className="flex flex-col">
              <label className="text-white font-semibold text-[1.2rem] mt-4">
                * Email{" "}
              </label>
              <input
                className="my-2 h-10 bg-transparent text-white border-2 rounded-[10px] p-5 placeholder:text-[white]"
                placeholder="StayEz@gmail.com"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-required
              />
              <label className="text-white font-semibold text-[1.2rem] mt-4">
                * Password{" "}
              </label>
              <div className="relative">
                <input
                  className="my-2 h-10 bg-transparent border-2 text-white rounded-[10px] p-5 placeholder:text-[white] w-full"
                  placeholder="***************"
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  aria-required
                />
                <button
                  type="button"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <AiFillEyeInvisible className="text-white h-6 w-6" /> : <AiFillEye className="text-white h-6 w-6" />}
                </button>
              </div>
              <div className="flex justify-between w-[100%] md:w-[100%]">
                <h1></h1>
                <h2 className="text-[#03A9F4]">Forgot Password ?</h2>
              </div>

              <div className="mt-5 flex flex-col">
                <button
                  type="submit"
                  className="bg-[#03A9F4] text-white rounded-[10px] font-semibold px-8 py-3 mt-5"
                >
                  Login
                </button>
                {error && <p className="text-red-500 mt-2">{error}</p>}
                <h1 className="text-white text-center mt-4">
                  Don&apos;t Have an Account ?
                  <NavLink to="/register">
                    <button>
                      <span className="text-[#03A9F4]"> Sign Up !</span>
                    </button>
                  </NavLink>
                </h1>
              </div>
            </form>
            <div className="mt-10">
              <img className="md:h-20  md:object-contain" src={or} alt="" />
            </div>
            <div className="mt-10 flex justify-center">
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
