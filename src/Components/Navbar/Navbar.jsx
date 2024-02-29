import React, { useState } from "react";
import { Input } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { MenuComponent } from "../MenuItem/MenuItem";
import logo from "../../assets/logo.svg";
import { IoCartSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { Dropdown } from "../MenuItem/Dropdown";
import { Sidebar } from "../Sidebar/Sidebar";
import { Sidebar2 } from "../Sidebar/Siderbar2";

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

  const shopItems = [
    "Appliances",
    "Baby",
    "Clothing",
    "Clothing, Luggage & Handbags",
    "Computers",
    "Costco Direct",
    "Costco Next",
    "Electronics",
    "Floral & Gift Baskets",
  ];

  const dropDownMenuColor = {
    color: "black",
    backgroundColor: "#ffffff",
  };

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

      <div className="flex  bg-[#8496a521] p-2 ">
        <img src={logo} alt="Logo" width={"200px"} />
        <div className="flex justify-evenly  items-center text-[#0060A9] ">
          <Input width={"700px"} />
          <div className="flex items-center ml-10 ">
            <a className="hover:underline" href="#">
              Sign In / Register
            </a>
            <hr className="w-6 font-thin border-black rotate-90 " />
            <a className="hover:underline" href="#">
              Orders & Returns
            </a>
            <hr className="w-6 font-thin border-black rotate-90 " />
            <p className="flex hover:underline ">
              <IoCartSharp className="h-8 w-11" />
              Cart
            </p>
          </div>
        </div>
      </div>

      {/* dropDownMenu */}
      <div className="flex justify-evenly bg-[#0073A6] h-10 text-white  ">
        {/* <p className="flex items-center h-8" >
          Shop
        </p> */}
        <span>
          {/* <GiHamburgerMenu /> */}
          <Dropdown
            colors={dropDownMenuColor}
            val={"Shop"}
            icon={<GiHamburgerMenu />}
          />
        </span>
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
      <div className="flex justify-between m-auto pr-2 pl-2 pt-2 " >
        <div className="flex justify-evenly" >
          <div>
            <p>My Warehouse</p>
            <Sidebar val={"My Warehouse"} />
            <p className="text-red-600 text-xs" >Closed: Open 10:00 AM Wednesday</p>
          </div>
          <div>
            <p>Deliver Location</p>
            <Sidebar2/>
          </div>
        </div>
        <div className="flex" >
          <p>List</p>
          <p>/</p>
          <p>Buy Again</p>
        </div>
      </div>
      <hr/>
    </div>
  );
};
