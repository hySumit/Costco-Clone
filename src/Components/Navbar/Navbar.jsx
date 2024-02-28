import React, { useState } from "react";
import { Input } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { MenuComponent } from "../MenuItem/MenuItem";
import logo from "../../assets/logo.svg";
import { IoCartSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

export const Navbar = () => {
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

  return (
    <div>
      <div className="bg-black">
        <h1 className="text-2xl font-bold underline text-white text-center">
          Ends Today! Bosch 300 Series Front Control Dishwasher $100 OFF!
        </h1>
      </div>
      <div className="text-center flex gap-10 justify-end bg-[#8496a521] text-[#0060A9] ">
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
          Warehouse Hot Buys
        </a>
        <a className="hover:underline" href="#">
          Get Email Offers
        </a>
        <a className="hover:underline" href="#">
          Customer Services
        </a>

        <div className="mr-5">
          <MenuComponent className={"bg-black text-red"} value={countries} />
        </div>
      </div>

      <div className="flex  bg-[#8496a521] p-2 " >
        
        <img src={logo} alt="Logo" width={"200px"} />
        <div className="flex justify-evenly  items-center text-[#0060A9] " >
          <Input width={"700px"} />
          <div className="flex items-center ml-10 ">

          <a className="hover:underline" href="#">Sign In / Register</a>
          <hr className="w-6 font-thin border-black rotate-90 "  />
          <a className="hover:underline"href="#">Orders & Returns</a>
          <hr className="w-6 font-thin border-black rotate-90 " />
          <p className="flex hover:underline " >
          <IoCartSharp className="h-8 w-11"/>
          Cart
          </p>
          </div>
        </div>
      </div>

      {/* dropDownMenu */}
      <div>
        <p className="flex items-center h-8" >
        <GiHamburgerMenu />
          Shop
        </p>
      </div>

    </div>
  );
};
