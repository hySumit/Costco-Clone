import React, { useState } from "react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";


export const MenuComponent = ({ value,className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <Menu isOpen={isOpen} onClose={handleClose}>
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon />}
        onMouseEnter={handleOpen}
        className={className}
        //   onMouseLeave={handleClose}
        onClick={(prev)=>setIsOpen(prev? true:false)}
      >
        US
      </MenuButton>
      <MenuList>
        {value.map((e, index) => (
          <MenuItem key={index}>{e}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
