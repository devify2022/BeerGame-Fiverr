import { useState } from "react";
import facebook from "../../assets/SignIn/facebook.png";
import google from "../../assets/SignIn/google.png";
import SignIn1 from "../../assets/SignIn/SignIn1.png";
import {
  auth,
  googleProvider,
  facebookProvider,
} from "../../../firebase.config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Selected Option:", selectedOption);
    console.log("Email:", email);
    console.log("Password:", password);

    setEmail("");
    setPassword("");
    setSelectedOption("");
    setIsEmailFocused(false);
    setIsPasswordFocused(false);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const signInGoogle = () => {
    signInWithPopup(auth, googleProvider)
      // console.log(auth)
      .then((result) => {
        console.log(result);

        if (result) {
          if (result.user.auth) {
            navigate("/");
          }
        } else {
          console.log('error')
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signInFacebook = () => {
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-[100%] h-full md:h-screen px-4 lg:px-48 md:px-12 py-4 md:py-2">
      <div className="flex flex-col md:flex-row gap-2 justify-between items-center w-full h-[10%] my-2">
        <div className="w-full md:w-[50%] text-[1.4rem] md:text-[1.2rem] lg:text-[1rem] xl:text-[1.75rem] flex justify-center md:justify-start">
          <p className="font-semibold">Play a Demo of the Beer Game</p>
        </div>
        <div className="flex space-x-2 lg:space-x-8 items-center w-full md:w-[50%] justify-center md:justify-end text-[.9rem] md:text-[.6rem] lg:text-[.6rem] xl:text-[1rem]">
          <label className="flex items-center text-[#4F5665]">
            <input
              type="radio"
              name="option"
              value="Professional"
              checked={selectedOption === "Professional"}
              onChange={handleOptionChange}
              className="form-radio text-blue-600"
            />
            <span className="ml-2">Professional</span>
          </label>
          <label className="flex items-center text-[#4F5665]">
            <input
              type="radio"
              name="option"
              value="Student"
              checked={selectedOption === "Student"}
              onChange={handleOptionChange}
              className="form-radio text-blue-600"
            />
            <span className="ml-2">Student</span>
          </label>
          <label className="flex items-center text-[#4F5665]">
            <input
              type="radio"
              name="option"
              value="Professor"
              checked={selectedOption === "Professor"}
              onChange={handleOptionChange}
              className="form-radio text-blue-600"
            />
            <span className="ml-2">Professor</span>
          </label>
        </div>
      </div>

      <div className="flex flex-col md:flex-row w-full h-[90%] md:h-[50%] lg:h-[60%] shadow-xl rounded-lg border">
        <div className="w-full md:w-[50%] h-[90%] sm:h-[50%] md:h-full bg-[#F53838] flex flex-col justify-center items-center text-center gap-4 py-8 md:py-0 rounded-top-lg md:rounded-l-lg">
          <div className="text-white text-[1.5rem] md:text-[1.5rem] xl:text-[2.5rem] font-bold">
            <p>Welcome Back!</p>
          </div>
          <div className="text-white text-[1rem] md:text-[1rem] xl:text-[1.75rem]">
            <p>To stay connected please login with your personal info</p>
          </div>
        </div>

        <div className="w-full md:w-[50%] h-[60%] md:h-full flex flex-col justify-center px-12 py-2 mt-4 md:mt-0 sm:pt-0">
          <div className="text-[1.5rem] md:text-[1rem] xl:text-[2rem] font-bold flex justify-center">
            <p>SIGN IN</p>
          </div>
          <div className="mt-6 md:mt-0">
            <form onSubmit={handleSubmit}>
              <div className="relative my-4 md:my-2 lg:my-6 w-full">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setIsEmailFocused(true)}
                  onBlur={() => setIsEmailFocused(email !== "")}
                  className="text-[1rem] md:text-[.6rem] xl:text-[1rem] w-full border-b-2 border-gray-300 p-1 bg-transparent outline-none"
                  required
                />
                <label
                  htmlFor="email"
                  className={`absolute left-0 text-[#A1A1A1] transition-all duration-300 ease-in-out pointer-events-none text-[1rem] md:text-[0.6rem] xl:text-[1.2rem] w-full ${
                    isEmailFocused || email
                      ? "-top-6 text-[1rem] text-gray-800 hidden"
                      : "top-1 md:top-0"
                  }`}
                >
                  Email Address
                </label>
                <div
                  className={`absolute bottom-0 left-0 h-0.5 w-full bg-gray-800 transform transition-transform duration-300 ease-in-out ${
                    isEmailFocused || email ? "scale-x-100" : "scale-x-0"
                  }`}
                ></div>
              </div>

              <div className="relative my-4 md:my-2 lg:my-6 w-full">
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setIsPasswordFocused(true)}
                  onBlur={() => setIsPasswordFocused(password !== "")}
                  className="text-[1rem] md:text-[.6rem] xl:text-[1rem] w-full border-b-2 border-gray-300 p-1 bg-transparent outline-none"
                  required
                />
                <label
                  htmlFor="password"
                  className={`absolute left-0 text-[#A1A1A1] transition-all duration-300 ease-in-out pointer-events-none text-[1rem] md:text-[0.6rem] xl:text-[1.2rem] w-full ${
                    isPasswordFocused || password
                      ? "-top-6 text-[1.4rem] text-gray-800 hidden"
                      : "top-1"
                  }`}
                >
                  Password
                </label>
                <div
                  className={`absolute bottom-0 left-0 h-0.5 w-full bg-gray-800 transform transition-transform duration-300 ease-in-out ${
                    isPasswordFocused || password ? "scale-x-100" : "scale-x-0"
                  }`}
                ></div>
              </div>

              <div className="flex flex-col md:flex-row justify-center items-center gap-2 lg:my-4">
                <div className="border border-gray-300 p-2 md:p-1 lg:p-2 sm:text-[.7rem] md:text-[.5rem] xl:text-[.75rem] rounded-md w-full lg:w-[50%] text-[#A1A1A1]">
                  <button
                    onClick={signInGoogle}
                    className="flex gap-2 items-center w-full"
                  >
                    <img
                      src={google}
                      alt="google"
                      className="md:w-[4%] lg:w-[10%] h-full"
                    />
                    <p>Continue with Google</p>
                  </button>
                </div>
                <div className="border border-gray-300 p-2 md:p-1 lg:p-2 text-[.7rem] md:text-[.5rem] xl:text-[.75rem] rounded-md w-full lg:w-[50%] text-[#A1A1A1]">
                  <button
                    onClick={signInFacebook}
                    className="flex gap-2 items-center w-full"
                  >
                    <img
                      src={facebook}
                      alt="facebook"
                      className="md:w-[4%] lg:w-[10%] h-full"
                    />
                    <p>Continue with Facebook</p>
                  </button>
                </div>
              </div>

              <div className="my-4 md:my-2 lg:my-4 flex justify-center text-[.8rem] md:text-[.5rem] xl:text-[1rem] text-gray-400 cursor-pointer">
                <a href="#">Forgot your password?</a>
              </div>

              <div className="flex justify-center md:text-[.5rem] xl:text-[1.2rem]">
                <button
                  type="submit"
                  className="bg-[#F53838] text-white font-semibold px-6 py-2 rounded-3xl"
                >
                  SIGN IN
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="w-full h-[28%] my-4 hidden md:block bg-transparent">
        <img
          src={SignIn1}
          alt="signin1"
          className="w-full h-full object-contain bg-transparent"
        />
      </div>
    </div>
  );
};

export default SignIn;
