import React, { useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Stack,
  Box,

} from "@chakra-ui/react";
import { PiPackage } from "react-icons/pi";

import { Button } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

export const Sidebar2 = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();

  return (
    <>
      <Button
        colorScheme="teal"
        onClick={onOpen}
        color="black"
        background={"none"}
        _hover={"none"}
        gap={"20px"}
      >
        <PiPackage />
        845438
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        initialFocusRef={firstField}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            <p>Change Delivery Location</p>
            <p style={{ fontSize: "15px" }}>
            Item availability varies by area. In order to view the products available in your area, please provide your ZIP code.
            </p>
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">
              <Box className="flex flex-col gap-4" >
                <Input
                  ref={firstField}
                  id="username"
                  placeholder="ZIP Code"
                />
                <Button colorScheme="blue">Change Delivery Location</Button>
              </Box>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

//   <Button ref={btnRef}  onClick={onOpen} color="black"  background={'none'} _hover={"none"} >
//   <IoLocationSharp />
//     India
//   </Button>
