import React, { useState, useEffect } from "react";
import { Box, Flex, Button, Image } from "@chakra-ui/react";
import { LuArrowLeftCircle } from "react-icons/lu";
import { LuArrowRightCircle } from "react-icons/lu";
import Slide1 from '../../assets/slide1.avif'
import Slide2 from '../../assets/slide2.avif'
import Slide3 from '../../assets/Slide3.avif'
import Slide4 from '../../assets/slide4.avif'
import Slide5 from '../../assets/slide5.avif'
import Slide6 from '../../assets/slide6.avif'
import './Sider.css'; 

const SlideImages = () => {
  const images = [
    Slide1,
    Slide2,
    Slide3,
    Slide4,
    Slide5,
    Slide6,
  ];

  const [count, setCount] = useState(0);

  const slideImages = (direction) => {
    if (direction === "next") {
      setCount((prevCount) => (prevCount + 1) % images.length);
    } else if (direction === "prev") {
      setCount((prevCount) => (prevCount - 1 + images.length) % images.length);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      slideImages("next");
    }, 3000);

    return () => clearInterval(intervalId);
  }, [count]);

  return (
    <Box overflowX="hidden" className="  slider1  "  >
      <Flex className="slider-container" width={`${images.length * 105}%`} transform={`translateX(-${count * (100 / images.length)}%)`} transition="transform 0.5s">
        {images.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            borderRadius="10px"
            className="img"
          />
        ))}
      </Flex>
      <Flex position="absolute" top="18%" left={0} right={0} justifyContent="space-between" px={4}>
        <Button className="btn" onClick={() => slideImages("prev")}>
          <LuArrowLeftCircle className="icon"/>
        </Button>
        <Button onClick={() => slideImages("next")} className="btn" >
          <LuArrowRightCircle className="icon" />
        </Button>
      </Flex>
    </Box>
  );
};

export default SlideImages;
