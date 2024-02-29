import React, { useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Stack,
  Box,
  FormLabel,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Select,
  Textarea,
} from "@chakra-ui/react";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

import { Button } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

export const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();
  const [openDetails,setOpenDetails] = useState(true)

  //     const { isOpen, onOpen, onClose } = useDisclosure()
  //   const btnRef = React.useRef()

  const handleOpen = () => {
    setOpenDetails((prev) => !prev);
  };
  

  return (
    <>
      <Button
        colorScheme="teal"
        onClick={onOpen}
        color="black"
        background={"none"}
        _hover={"none"}
      >
        <IoLocationSharp />
        India
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
            <p>Find a Warehouse</p>
            <p style={{ fontSize: "15px" }}>
              Select a warehouse to see items that are available near you.
            </p>
          </DrawerHeader>

          <DrawerBody className="border-2 border-blue-500 ">
            <Stack spacing="24px">
              <Box className="flex">
                <Input
                  ref={firstField}
                  id="username"
                  placeholder="City, State or Zip"
                />
                <Button colorScheme="blue">Find</Button>
              </Box>
              <a className="text-[#0060A9] hover:underline" href="#">
                Show Filter Options
              </a>
              <Box>
                <div className="text-[#0E870F] flex items-center gap-4 font-bold">
                  <IoIosCheckmarkCircleOutline />
                  <p>My Warehouse</p>
                </div>
                <div>
                  <div className="flex items-center gap-4">
                    <IoLocationSharp />
                    <p className="text-[#0060A9] font-bold ">India</p>
                    <p>(0.85mi)</p>
                  </div>

                  <p className="text-red-500">
                    Closed: Open 10:00 AM Wednesday
                  </p>
                </div>

                <div>
                  <Accordion allowToggle>
                    <AccordionItem>
                      <h2>
                        <AccordionButton>
                          <Box as="span" flex="1" textAlign="left" onClick={handleOpen} >
                            <p>

                            {openDetails ? "Show Warehouse Details":"Hide Warehouse Details"}
                            </p>

                            {/* Show Warehouse Details */}
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </div>
              </Box>
              <Box>
                {/* <div className="text-[#0E870F] flex items-center gap-4 font-bold">
                  <IoIosCheckmarkCircleOutline />
                  <p>My Warehouse</p>
                </div> */}
                <div>
                  <div className="flex items-center gap-4">
                    <IoLocationSharp />
                    <p className="text-[#0060A9] font-bold ">Tukwila</p>
                    <p>(0.85mi)</p>
                  </div>

                  <p className="text-red-500">
                    Closed: Open 10:00 AM Wednesday
                  </p>
                </div>

                <div>
                  <Accordion allowToggle>
                    <AccordionItem>
                      <h2>
                        <AccordionButton>
                          <Box as="span" flex="1" textAlign="left" onClick={handleOpen} >
                            <p>

                            {openDetails ? "Show Warehouse Details":"Hide Warehouse Details"}
                            </p>

                            {/* Show Warehouse Details */}
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </div>
              </Box>
              <Box>
                {/* <div className="text-[#0E870F] flex items-center gap-4 font-bold">
                  <IoIosCheckmarkCircleOutline />
                  <p>My Warehouse</p>
                </div> */}
                <div>
                  <div className="flex items-center gap-4">
                    <IoLocationSharp />
                    <p className="text-[#0060A9] font-bold ">India</p>
                    <p>(0.85mi)</p>
                  </div>

                  <p className="text-red-500">
                    Closed: Open 10:00 AM Wednesday
                  </p>
                </div>

                <div>
                  <Accordion allowToggle>
                    <AccordionItem>
                      <h2>
                        <AccordionButton>
                          <Box as="span" flex="1" textAlign="left" onClick={handleOpen} >
                            <p>

                            {openDetails ? "Show Warehouse Details":"Hide Warehouse Details"}
                            </p>

                            {/* Show Warehouse Details */}
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </div>
              </Box>
              <Box>
                {/* <div className="text-[#0E870F] flex items-center gap-4 font-bold">
                  <IoIosCheckmarkCircleOutline />
                  <p>My Warehouse</p>
                </div> */}
                <div>
                  <div className="flex items-center gap-4">
                    <IoLocationSharp />
                    <p className="text-[#0060A9] font-bold ">India</p>
                    <p>(0.85mi)</p>
                  </div>

                  <p className="text-red-500">
                    Closed: Open 10:00 AM Wednesday
                  </p>
                </div>

                <div>
                  <Accordion allowToggle>
                    <AccordionItem>
                      <h2>
                        <AccordionButton>
                          <Box as="span" flex="1" textAlign="left" onClick={handleOpen} >
                            <p>

                            {openDetails ? "Show Warehouse Details":"Hide Warehouse Details"}
                            </p>

                            {/* Show Warehouse Details */}
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </div>
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
