import React, { useContext, useState } from "react";
import { useToast } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthContext";

export const Signup = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { setIsAuth } = useContext(AuthContext);
  const toast = useToast();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    if (newPassword.length <= 8) {
      setPassword(newPassword);
    }
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();


    localStorage.setItem("email", email);
    localStorage.setItem("password", password);


    setIsAuth(true);

    setEmail("");
    setPassword("");

  
    toast({
      title: "Account Created Successfully",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
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
      <h1 className="text-center m-4 relative right-[105px] text-[30px]">
        Create Account
      </h1>
      <div className="m-auto border rounded w-[30%] h-[300px] mt-[5vh] outline-2">
        <form onSubmit={handleFormSubmit}>
          <div className="card m-auto text-center flex flex-col gap-4 w-[100%]">
            <div>
              <input
                type="text"
                className="border p-2 outline-none focus:border-blue-500 m-[20px] w-[70%]"
                placeholder="Email Address"
                value={email}
                name="Email"
                onChange={handleChange}
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
            <p>
              By creating an account you agree to Costco.com <br />
              <span className="border-blue-500 text-blue-500 hover:underline  ">
                terms and conditions
              </span>{" "}
              of use.
            </p>
            <button
              className="m-auto text-white cursor-pointer rounded w-[70%] bg-blue-500 p-2 hover:bg-[#3071A9]"
            >
              Create Account
            </button>

            <h1>
              Already have an account?{" "}
              <span className="text-blue-500 hover:underline ">
                {" "}
                <Link to={"/login"}> Sign in </Link>{" "}
              </span>{" "}
            </h1>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
