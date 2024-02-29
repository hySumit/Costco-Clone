import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import img1 from "../../assets/a1.avif";
import img2 from "../../assets/a2.avif";
import img3 from "../../assets/a3.avif";
import img4 from "../../assets/a4.avif";
import img5 from "../../assets/a5.avif";
import img6 from "../../assets/a6.avif";
import img7 from "../../assets/a7.avif";
import img8 from "../../assets/a8.avif";
import img9 from "../../assets/a9.avif";
import img10 from "../../assets/a10.avif";
import img11 from "../../assets/a11.avif";

export const ProductGrid = () => {
  return (
    <>
      <div className="gridbox m-5 text-center">
        <Grid
          h="200px"
          // templateRows="repeat(1, 1fr)"
          templateColumns="repeat(3, 1fr)"
          gap={4}
        >
          <GridItem className=" rounded-[10px] bg-[#EFF7FB] font-bold " colSpan={1}  >
            <h2 className="text-[20px] text-[#0B6E22] " >Same-Day</h2>
            <p className="text-[#333333]" >Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            <img src={img1} alt="" />
          </GridItem>
          <GridItem className=" rounded-[10px] bg-[#EFF7FB] font-bold " colSpan={1}  >
            <h2 className="text-[20px] text-[#002BA2] " >2-Day</h2>
            <p className="text-[#333333]" >Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            <img src={img2} alt="" />
          </GridItem>
          <GridItem className=" rounded-[10px] bg-[#EFF7FB] font-bold " colSpan={1}  >
            <h2 className="text-[20px] text-[#0060A9] " >Costco NEXT</h2>
            <p className="text-[#333333]" >Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            <img src={img3} alt="" />
          </GridItem>


          <GridItem className=" rounded-[10px] bg-[#EFF7FB] font-bold " colSpan={1}  >
            <h2 className="text-[20px] bg-[#9ACEF3] text-[#9ACEF3] rounded-t-[10px] " >.</h2>
            
            <img src={img4} alt="" />
            <h2 className="text-[16px] bg-[#333333] rounded-b-[10px] text-white " >Sam Lorem ipsum dolor sit. </h2>
          </GridItem>

          <GridItem className=" rounded-[10px] bg-[#EFF7FB] font-bold " colSpan={1}  >
            <h2 className="text-[20px] bg-[#055E88] rounded-t-[10px] text-white " >2-Day</h2>
            
            <img src={img5} alt="" />
            <h2 className="text-[16px] bg-[#055E88] rounded-b-[10px] text-white " > Lorem ipsum dolor sit. </h2>
          </GridItem>

          <GridItem className=" rounded-[10px] bg-[#EFF7FB] font-bold " colSpan={1}  >
            <h2 className="text-[20px] bg-[#BC1A21] rounded-t-[10px] text-white " >Costco NEXT</h2>
            
            <img src={img6} alt="" />
            <h2 className="text-[16px] bg-[#BC1A21] rounded-b-[10px] text-white " >Costc Lorem ipsum dolor sit. </h2>
          </GridItem>


          <GridItem className=" rounded-[10px] bg-[#EFF7FB] font-bold " colSpan={1}  >
            
            <img src={img7} className="rounded-[15px]" alt="" />
          
          </GridItem>

          <GridItem className=" rounded-[10px] bg-[#EFF7FB] font-bold " colSpan={1}  >
            
            
            <img src={img8} className="rounded-[15px]" alt="" />
          </GridItem>

          <GridItem className=" rounded-[10px] bg-[#EFF7FB] font-bold " colSpan={1}  >
            
            
            <img src={img9} className="rounded-[15px]" alt="" />
          
          </GridItem>
        </Grid>
      </div>

      <div className="grid2 flex ">
          <div>
            <img src={img10} alt="" />
            
          </div>
          <div>
            <img src={img11} alt="" />
          </div>
        </div>


    </>
  );
};
