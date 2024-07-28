import React from "react";
import { Link } from "react-router-dom";
import fbIcon from "../../assets/icons/facebook.svg"
import instaIcon from "../../assets/icons/instagram.svg"
import twitterIcon from "../../assets/icons/twitter.svg"
const Footer = () => {
  return (
    <div className="w-full h-fit bg-[#f8f8f8]">
      <div className="px-12 flex w-[95%] h-full mx-auto py-20 justify-between items-start flex-wrap">
        <div className="w-full md:w-[30%] mb-8 md:mb-0">
          <p className="text-[1.3rem]">
            The <strong>Beer Game</strong> is a supply chain simulation game
            that teaches players about the complexities and dynamics of supply
            chain management.
          </p>
          <div className="mt-[1rem] mb-[2rem] w-32 h-fit  justify-between items-center hidden md:flex">
            <div
              className="w-5 h-5 rounded-full bg-red-500 flex justify-center items-center bg-center bg-no-repeat"
             
            >
                 <img src={fbIcon} alt="" className="bg-red-500 rounded-full " style={{
               
               transform: "scale(2.0)",
             }} />
            </div>
            <div
              className="w-5 h-6 rounded-full  flex justify-center items-center bg-center bg-no-repeat"
              
            >
              <img src={instaIcon} className="bg-red-500 rounded-full " style={{
               
               transform: "scale(2.0)",
             }} alt="" />
            </div>
            <div
              className="w-5 h-5 rounded-full bg-red-500 flex justify-center items-center bg-center bg-no-repeat"
              
            >
                  <img src={twitterIcon} className="bg-red-500 rounded-full " style={{
               
               transform: "scale(2.0)",
             }} alt="" />
            </div>
          </div>
          <p className="text-[1.3rem] md:block hidden">©2024BeerGame</p>
        </div>
        <div className="w-full md:w-[65%] flex flex-col md:flex-row items-start justify-between  ">
          <div className="w-full md:w-[30%] h-full flex flex-col items-start md:items-end justify-evenly  mb-4 md:mb-0">
            <div className="w-fit h-full flex flex-col gap-y-4">
              <p className="font-semibold text-[1.3rem]">Simulation</p>
              <Link>Download</Link>
              <Link>Price</Link>
              <Link>Locations</Link>
              <Link>Server</Link>
              <Link>Countries</Link>
              <Link>Blog</Link>
            </div>
          </div>
          <div className="w-full md:w-[30%] h-full flex flex-col items-start md:items-end justify-evenly  mb-4 md:mb-0">
            <div className="w-fit  h-full flex flex-col gap-y-4">
              <p className="font-semibold text-[1.3rem]">Key Learnings</p>
              <Link>laslesVPN</Link>
              <Link>FAQ</Link>
              <Link>Tutorials</Link>
              <Link>About Us</Link>
              <Link>Privacy</Link>
              <Link>Policy</Link>
              <Link>Terms of Service</Link>
            </div>
          </div>
          <div className="w-full md:w-[30%] h-full flex flex-col items-start md:items-end justify-evenly ">
            <div className="w-fit h-full flex flex-col gap-y-4">
              <p className="font-semibold text-[1.3rem]">Earnings</p>
              <Link>Affiliate</Link>
              <Link>Become Partner</Link>
            </div>
          </div>
          <div className="mt-[2rem] mb-[1rem] w-32 h-fit flex justify-between items-center md:hidden   ">
            <div
              className="w-6 h-6 rounded-full bg-red-500 flex justify-center items-center bg-center bg-no-repeat cursor-pointer"
              style={{
                backgroundImage: "url(src/assets/icons/facebook.svg)",
                transform: "scale(1.5)",
              }}
            ></div>
            <div
              className="w-6 h-6 rounded-full bg-red-500 flex justify-center items-center bg-center bg-no-repeat  cursor-pointer"
              style={{
                backgroundImage: "url(src/assets/icons/instagram.svg)",
                transform: "scale(1.5)",
              }}
            ></div>
            <div
              className="w-6 h-6 rounded-full bg-red-500 flex justify-center items-center bg-center bg-no-repeat  cursor-pointer"
              style={{
                backgroundImage: "url(src/assets/icons/twitter.svg)",
                transform: "scale(1.5)",
              }}
            ></div>
          </div>
          <p className="text-[1.3rem] md:hidden block">©2024BeerGame</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
