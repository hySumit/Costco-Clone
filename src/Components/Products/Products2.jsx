import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import banner1 from '../../assets/heading1.avif';
import c1 from '../../assets/c1.avif';
import c2 from '../../assets/c2.avif';
import c3 from '../../assets/c3.avif';
import c4 from '../../assets/c4.avif';
import c5 from '../../assets/c5.avif';
import banner2 from '../../assets/heading2.avif';

export const Products2 = () => {
  return (
    <>
      <Box className='bg-[#ECF6FF] text-[#02339B] font-bold text-2xl text-center rounded-t-[15px] w-[98%] m-auto'>
        <h2 className='pb-5'>2-Day Delivery on Grocery!</h2>
        <img className='rounded-b-[15px] overflow-hidden' src={banner1} alt="" />
      </Box>

      <Flex className="flex text-center gap-7 m-5" direction={{ base: 'column', md: 'row' }}>
        <Box className="card bg-[#FCCF7F] rounded-[10px] rounded-t-[10px]">
          <h2 className='p-2'>Discover Swimwear</h2>
          <img src={c1} alt="" />
          <Box className='h-5 rounded-b-[10px] bg-[#DADDFE]' />
        </Box>
        <Box className="card bg-[#FCCF7F] rounded-[10px] rounded-t-[10px]">
          <h2 className='p-2'>Ladies'Shorts And Skorts</h2>
          <img src={c2} alt="" />
          <Box className='h-5 rounded-b-[10px] bg-[#C6FDEA]' />
        </Box>
        <Box className="card bg-[#FCCF7F] rounded-[10px] rounded-t-[10px]">
          <h2 className='p-2'>Men's Polos and Shorts</h2>
          <img src={c3} alt="" />
          <Box className='h-5 rounded-b-[10px] bg-[#B6DFFF]' />
        </Box>
      </Flex>

      <Box className='bg-[#00549C] text-center text-white w-[97%] rounded-t-[10px] m-auto mb-5 mt-5'>
        <h2 className='text-[19px] font-bold'>MEMBER-ONLY VALUE</h2>
        <img src={banner2} alt="" />
        <Box className=' bg-[#E1E1E1] text-black rounded-b-[10px] p-3'>
          <h2 className='text-[13px]'>MORE PRODUCTS AND BRANDS</h2>
        </Box>
      </Box>

      <Flex className="2d flex gap-8 m-5" direction={{ base: 'column', md: 'row' }}>
        <Box className="2cards bg-[#D32029] rounded-[10px]">
          <h1 className='font-b text-white p-[3px] text-center text-[20px]'>From Newborn Baby to Big Kid</h1>
          <img src={c4} alt="" />
          <Box>
            <h2 className='text-center text-white'>WHILE SUPPLIES LAST</h2>
          </Box>
        </Box>
        <Box className="2cards bg-[#000000] rounded-[10px]">
          <h1 className='font-b text-white p-[3px] text-center text-[20px]'>Save Big On Premium LED TVs</h1>
          <img src={c5} alt="" />
          <Box>
            <h2 className='text-center text-white'>WHILE SUPPLIES LAST</h2>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default Products2;
