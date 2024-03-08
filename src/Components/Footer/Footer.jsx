import React from "react";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import fb from "../../assets/social-facebook.svg";
import pin from "../../assets/social-pinterest.svg";
import ig from "../../assets/social-instagram.svg";
import appIcon from "../../assets/app-icon.avif";
import { FaSearch } from "react-icons/fa";
import { FcPrivacy } from "react-icons/fc";

export const Footer = () => {
  return (
    <div className="mt-16 md:mt-32 lg:mt-48 xl:mt-64 m-auto bg-[#EEEEEE]">
      <div className="top flex flex-wrap justify-evenly pt-8 pb-8">
       
        <div className="top-child ">
          <h1>Customer Service</h1>
          <div className="flex items-center gap-2">
            <BsFillQuestionCircleFill />
            <p>Get Help</p>
          </div>
        </div>

        <div className="top-child">
          <h1>Find a Warehouse</h1>
          <input
            className=" h-[30px] border-[2px]"
            type="text"
            placeholder="City, state or Zip"
          />
          <button className="bg-[#3071A9] text-white w-[40px] hover:bg-[#215786] h-[28px]">
            Get
          </button>
        </div>

        <div className="top-child">
          <h1>Get Email Offers</h1>
          <input
            className="border-[2px]"
            type="text"
            placeholder="Enter your Email"
          />
          <button className="bg-[#3071A9] text-white w-[40px] hover:bg-[#215786] h-[28px]">
            Go
          </button>
        </div>

        <div className="top-child">
          <h1>Follow Us</h1>
          <div className="flex gap-2 justify-center">
            <img src={fb} alt="" width={"30px"} />
            <img src={pin} alt="" width={"30px"} />
            <img src={ig} alt="" width={"30px"} />
          </div>
        </div>

        <div className="top-child">
          <h1>Get the Costco App</h1>
          <img src={appIcon} alt="" width={"30px"} />
        </div>
        
      </div>

      <hr className="border-t border-gray-300 my-4" />

      <footer className="flex flex-wrap justify-evenly bg-[#EEEEEE] ">
        
        <div className="">
          <h1 className="font-bold text-1xl" >About Us</h1>
          <p className="hover:underline" href="#">Charitable Contributions</p>
          <p className="hover:underline" href="#">Company Information</p>
          <p className="hover:underline" href="#">Sustainability Commitment</p>
          <p className="hover:underline" href="#">Investor Relations</p>
          <p className="hover:underline" href="#">Careers</p>
          <p className="hover:underline" href="#">Kirkland Signature</p>
          <p className="hover:underline" href="#">Logo and Media Requests</p>
          <p className="hover:underline" href="#">The Costco Connection</p>
          <p className="hover:underline" href="#">Quick & Easy Recipe Videos</p>
          <p className="hover:underline" href="#">Costco Blog</p>
          <p className="hover:underline" href="#">Employee Site</p>
        </div>

        <div className="line">
          <div>
            <h1 className="font-bold text-1xl" >Membership</h1>
          <p className="hover:underline" href="#">Charitable Contributions</p>
          <p className="hover:underline" href="#">Company Information</p>
          <p className="hover:underline" href="#">Sustainability Commitment</p>
          <p className="hover:underline" href="#">Investor Relations</p>
          <p className="hover:underline" href="#">Careers</p>
          </div>
          <div className="line-2">
            <h1 className="font-bold text-1xl" >Vendors & Suppliers</h1>
            <p className="hover:underline" href="#">Charitable Contributions</p>
            <p className="hover:underline" href="#">Company Information</p>
            <p className="hover:underline" href="#">Sustainability Commitment</p>
            <p className="hover:underline" href="#">Investor Relations</p>
            <p className="hover:underline" href="#">Careers</p>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-1xl" >Customer Service</h1>
          <p className="hover:underline" href="#">Charitable Contributions</p>
          <p className="hover:underline" href="#">Company Information</p>
          <p className="hover:underline" href="#">Sustainability Commitment</p>
          <p className="hover:underline" href="#">Investor Relations</p>
          <p className="hover:underline" href="#">Careers</p>
          <p className="hover:underline" href="#">Kirkland Signature</p>
          <p className="hover:underline" href="#">Logo and Media Requests</p>
          <p className="hover:underline" href="#">The Costco Connection</p>
          <p className="hover:underline" href="#">Quick & Easy Recipe Videos</p>
          <p className="hover:underline" href="#">Costco Blog</p>
          <p className="hover:underline" href="#">Employee Site</p>
        </div>
        <div>
          <h1 className="font-bold text-1xl" >Location & Services</h1>
          <p className="hover:underline" href="#">Charitable Contributions</p>
          <p className="hover:underline" href="#">Company Information</p>
          <p className="hover:underline" href="#">Sustainability Commitment</p>
          <p className="hover:underline" href="#">Investor Relations</p>
          <p className="hover:underline" href="#">Careers</p>
          <p className="hover:underline" href="#">Kirkland Signature</p>
          <p className="hover:underline" href="#">Logo and Media Requests</p>
          <p className="hover:underline" href="#">The Costco Connection</p>
          <p className="hover:underline" href="#">Quick & Easy Recipe Videos</p>
          <p className="hover:underline" href="#">Costco Blog</p>
          <p className="hover:underline" href="#">Employee Site</p>
        </div>
      </footer>

      <hr className="border-t border-gray-300 my-4" />

      <footer className="footer2 bg-[#EEEEEE] text-center">
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-12 xl:gap-16">
          <p className="hover:underline" >Site Map</p>
          <p className="hover:underline" >Terms and Conditions</p>
          <p className="hover:underline" >Your Privacy Rights</p>
          <p className="hover:underline" >CA Notice</p>
          <p className="hover:underline" >Cookie Settings</p>
          <div className="flex items-center gap-2 hover:underline" >
          <FcPrivacy />
          <p >Privacy Choices</p>
          </div>
          <p className="hover:underline" >Feedback</p>
        </div>
        <div className="pb-[50px]">
        <p className="mt-5" >© 1998 — 2024 Costco Wholesale Corporation. All rights reserved.</p>

        </div>
      </footer>
    </div>
  );
};
