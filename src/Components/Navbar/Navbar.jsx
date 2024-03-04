import React, { useState } from "react";
import { Input, Flex, Stack, IconButton } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { MenuComponent } from "../MenuItem/MenuItem";
import logo from "../../assets/logo.svg";
import { IoCartSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { Collapse } from "@chakra-ui/react";
import { Dropdown } from "../MenuItem/Dropdown";
import { Drop2 } from "../MenuItem/Drop2";
import { Sidebar } from "../Sidebar/Sidebar";
import { Sidebar2 } from "../Sidebar/Siderbar2";
import Login from "../Login/Login";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const countries = [
    "Select country/region:",
    "United States",
    "Canada",
    "United Kingdom",
    "Mexico",
    "South Korea",
    "Taiwan",
    "Japan",
    "Australia",
    "Iceland",
    "France",
    "Spain",
    "New Zealand",
    "Sweden",
  ];

  const dropDownMenuColor = {
    color: "black",
    backgroundColor: "#ffffff",
  };

  return (
    <div>
      <div className="bg-black">
        <h1 className="text-2xl h1txt font-bold underline text-white text-center">
          Ends Today! Bosch 300 Series Front Control Dishwasher $100 OFF!
        </h1>
      </div>
      <div className="text-center flex gap-10 justify-end bg-[#8496a521] text-[#0060A9] navbar-text  ">
        <a className="hover:underline" href="#">
          Costco Next
        </a>
        <a className="hover:underline" href="#">
          While Supplies Last
        </a>
        <a className="hover:underline" href="#">
          Treasure Hunt
        </a>
        <a className="hover:underline" href="#">
          What's New
        </a>
        <a className="hover:underline" href="#">
          New Lower Prices
        </a>
        <a className="hover:underline" href="#">
          Warehouse Hot Buys
        </a>
        <a className="hover:underline" href="#">
          Get Email Offers
        </a>
        <a className="hover:underline" href="#">
          Customer Service
        </a>
        <div className="mr-5">
          <MenuComponent className={"bg-black text-red"} value={countries} />
        </div>
      </div>

      {/* <Stack
        direction={{ base: "column", md: "row" }}
        align="center"
        spacing={3}
        px={5}
        py={5}
        className="bg-[#ffffff] text-white"
      > */}
      <div className="flex logo-nav bg-[#8496a521]   ">
        <img src={logo} alt="Logo" className="w-48 md:w-64 logo-adjust" />
        <div className="flex flex-col justify-evenly items-center text-[#0060A9] md:flex-row md:ml-10 login">
          <Input width={{ base: "100%", md: "700px" }} className="inp" />

          <div className="flex items-center mt-2 md:mt-0 ml-0 md:ml-10 atag  ">
            <Link className="hover:underline" to={"/login"}>
              Sign In / Register
            </Link>

            <hr className="w-6 font-thin border-black md:rotate-0 md:border-r-0 md:border-b-6 " />
            <a className="hover:underline" href="#">
              Orders & Returns
            </a>
            <hr className="w-6 font-thin border-black md:rotate-0 md:border-r-0 md:border-b-6 " />

            <Link to={"cart"} className="flex hover:underline">
              <IoCartSharp className="h-8 w-11 " />
              Cart
            </Link>
          </div>
        </div>
      </div>

      <div className="loginshop lg:hidden">
        <span>
          <Drop2 icon={<GiHamburgerMenu />}
          colors={dropDownMenuColor}
          data = {["Login","SignUp", "Cart"]}
          />
        </span>
      </div>

      <div className=" blueLine flex justify-evenly gap-[80px] bg-[#0073A6] h-10 text-white   ">
        <span className="absolute shop left-9 top-[25.8vh]">
          {/* <GiHamburgerMenu /> */}
          <Dropdown
            colors={dropDownMenuColor}
            val={"Shop"}
            icon={<GiHamburgerMenu />}
          />
        </span>

        <div className="hideOnFullScreen flex justify-evenly gap-[40px]">
          <Dropdown colors={dropDownMenuColor} val={"Grocery"} />
          <Dropdown colors={dropDownMenuColor} val={"Same-Day"} />
          <Dropdown colors={dropDownMenuColor} val={"Deals"} />
          <Dropdown colors={dropDownMenuColor} val={"Business Delivery"} />
          <Dropdown colors={dropDownMenuColor} val={"Optical"} />
          <Dropdown colors={dropDownMenuColor} val={"Pharmacy"} />
          <Dropdown colors={dropDownMenuColor} val={"Services"} />
          <Dropdown colors={dropDownMenuColor} val={"Photo"} />
          <Dropdown colors={dropDownMenuColor} val={"Travel"} />
          <Dropdown colors={dropDownMenuColor} val={"Membership"} />
          <Dropdown colors={dropDownMenuColor} val={"Location"} />
          {/* <Sidebar/> */}
        </div>
      </div>

      <div className="flex justify-between m-auto pr-2 pl-2 pt-2 ">
        <div className="flex flex-col md:flex-row justify-evenly">
          <div className="mb-4 md:mb-0">
            <p>My Warehouse</p>
            <Sidebar val={"My Warehouse"} />
            <p className="text-red-600 text-xs">
              Closed: Open 10:00 AM Wednesday
            </p>
          </div>
          <div>
            <p>Deliver Location</p>
            <Sidebar2 />
          </div>
        </div>
        <div className="flex">
          <p>List</p>
          <p>/</p>
          <p>Buy Again</p>
        </div>
      </div>
      <hr className="border-t border-gray-300 my-4" />
    </div>
  );
};

export default Navbar;
