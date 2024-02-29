// import React, { useState } from "react";
// import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

// const NestedDropdown = ({ label, items }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleOpen = () => {
//     setIsOpen(true);
//   };

//   const handleClose = () => {
//     setIsOpen(false);
//   };

//   return (
//     <Menu isLazy isOpen={isOpen} onClose={handleClose}>
//       <MenuButton onMouseEnter={handleOpen}>
//         {label}
//       </MenuButton>
//       <MenuList>
//         {items.map((item) => (
//           <MenuItem key={item.label}>
//             {item.submenu ? (
//               <NestedDropdown label={item.label} items={item.submenu} />
//             ) : (
//               item.label
//             )}
//           </MenuItem>
//         ))}
//       </MenuList>
//     </Menu>
//   );
// };

// const MainDropdown = () => {
//   const mainItems = [
//     {
//       label: "Item 1",
//       submenu: [{ label: "Subitem 1.1" }, { label: "Subitem 1.2" }],
//     },
//     {
//       label: "Item 2",
//       submenu: [{ label: "Subitem 2.1" }, { label: "Subitem 2.2" }],
//     },
//     { label: "Item 3" },
//   ];

//   return (
//     <div>
//       <NestedDropdown label="Main Dropdown" items={mainItems} />
//     </div>
//   );
// };

// export default MainDropdown;
