import React, { useState } from "react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Drop2 = ({ data, colors, icon }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Menu isLazy isOpen={open} onClose={handleClose}>
      <MenuButton
        onMouseEnter={handleOpen}
        onMouseLeave={handleClose}
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center">
          {icon}
        </div>
      </MenuButton>
      <MenuList
        onMouseEnter={handleOpen}
        onMouseLeave={handleClose}
        autoFocus={false}
        margin={"-6px"}
      >
        {data.map((item, index) => (
          <MenuItem key={index} style={colors}>
            <Link to={`/${item.toLowerCase()}`}>{item}</Link>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
