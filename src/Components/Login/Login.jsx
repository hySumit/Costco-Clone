import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { AuthContext } from "../AuthContext/AuthContext";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const { setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    if (newPassword.length <= 8) {
      setPassword(newPassword);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleLoginFormSubmit = (e) => {
    e.preventDefault();


    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");


    if (storedEmail === email && storedPassword === password) {

      setIsAuth(true);


      toast({
        title: "Login Successful",
        status: "success",
        duration: 2000,
        isClosable: true,
      });


      navigate("/");
    } else {

      toast({
        title: "Login Failed",
        description: "Invalid email or password",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <div>
      <div className="m-auto flex justify-center bg-[#EEEEEE] p-2">
        <img
          width={"200px"}
          src="https://signin-ui.costco.com/ecomssoui/21/common/Images/logo-bc-us.svg"
          alt=""
        />
      </div>
      <h1 className="text-center m-4 relative right-[150px] text-[30px]">
        Sign In
      </h1>
      <div className="m-auto border rounded  w-[30%] h-[300px] mt-[5vh] outline-2 ">
        <div className="card m-auto text-center flex flex-col gap-4 w-[100%]">
          <form onSubmit={handleLoginFormSubmit}>
            <div>
              <input
                type="text"
                className="border p-2 outline-none focus:border-blue-500 m-[20px] mt-8 w-[70%]"
                placeholder="Email Address"
                value={email}
                onChange={handleEmailChange}
              />
              <div className="relative">
                <input
                  type={passwordVisible ? "text" : "password"}
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="Password"
                  className="border p-2 outline-none focus:border-blue-500 w-[70%]"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute top-1 right-[80px] text-white cursor-pointer rounded bg-blue-500 p-1 hover:bg-[#3071A9]"
                >
                  {passwordVisible ? "Hide" : "Show"}
                </button>
              </div>
            </div>
            <button className=" m-auto mt-8 text-white cursor-pointer rounded w-[70%] bg-blue-500 p-2 hover:bg-[#3071A9]">
              Sign In
            </button>
          </form>
          <h1>
            New to Costco?
            <span className="text-blue-500 hover:underline ">
              <Link to={"/signup"}> Sign Up </Link>
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Login;
