import React, { useState } from "react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

export const Dropdown = ({ val, colors, icon }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Menu isLazy isOpen={open} onClose={handleClose}  >
      <MenuButton
        onMouseEnter={handleOpen}
        onMouseLeave={handleClose}
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center" >
        {icon} 
        {val}
        </div>
      </MenuButton>
      <MenuList
    //   className="text-black"
        onMouseEnter={handleOpen}
        onMouseLeave={handleClose}
        autoFocus={false}
        margin={"-6px"}
      >
        
        <MenuItem style={colors} >New Window</MenuItem>
        <MenuItem style={colors} >Open Closed Tab</MenuItem>
        <MenuItem style={colors} >Open File</MenuItem>
      </MenuList>
    </Menu>
  );
};
