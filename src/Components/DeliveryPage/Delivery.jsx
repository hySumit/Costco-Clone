// import React from "react";
// import { Grid, GridItem } from "@chakra-ui/react";
// import img1 from "../../assets/d1.avif";
// import img2 from "../../assets/d2.avif";
// import img3 from "../../assets/d3.avif";

// export const Delivery = () => {
//   return (
//     <div>
//       <div className="grid-layout w-[97%] m-auto ">
//         <div className="grid-item g1">
//           <div className="hover bg-[#0660A4] w-[100%]">
//             <h3>TIRES</h3>
//             <p>Balancing & Flat Repairs</p>
//             <button>SHOP NOW</button>
//             <p>5-Year Warranty</p>
//           </div>
//         </div>
//         <div className="grid-item g2">
//           <img
//             className="rounded-t-[15px]"
//             src="https://mobilecontent.costco.com/staging/resource/img/24w01226/eco-home-why-buy-apliances-img.jpg"
//             alt=""
//           />
//           <div className="hover rounded-b-[15px] mt-[-10px] bg-[#0660A4] w-[100%]">
//             <h3>TIRES</h3>
//             <p>Balancing & Flat Repairs</p>
//             <button>SHOP NOW</button>
//             <p>5-Year Warranty</p>
//           </div>
//         </div>
//         <div className="grid-item g2">
//           <img
//             className="rounded-t-[15px]"
//             src="https://mobilecontent.costco.com/staging/resource/img/24w01226/eco-home-why-buy-apliances-img.jpg"
//             alt=""
//           />
//           <div className="hover rounded-b-[15px] mt-[-10px] bg-[#0660A4] w-[100%]">
//             <h3>TIRES</h3>
//             <p>Balancing & Flat Repairs</p>
//             <button>SHOP NOW</button>
//             <p>5-Year Warranty</p>
//           </div>
//         </div>
//         <div className="grid-item g2">
//           <img
//             className="rounded-t-[15px]"
//             src="https://mobilecontent.costco.com/staging/resource/img/24w01226/eco-home-why-buy-apliances-img.jpg"
//             alt=""
//           />
//           <div className="hover rounded-b-[15px] mt-[-10px] bg-[#0660A4] w-[100%]">
//             <h3>TIRES</h3>
//             <p>Balancing & Flat Repairs</p>
//             <button>SHOP NOW</button>
//             <p>5-Year Warranty</p>
//           </div>
//         </div>
//         <div className="grid-item g2">
//           <img
//             className="rounded-t-[15px]"
//             src="https://mobilecontent.costco.com/staging/resource/img/24w01226/eco-home-why-buy-apliances-img.jpg"
//             alt=""
//           />
//           <div className="hover rounded-b-[15px] mt-[-10px] bg-[#0660A4] w-[100%]">
//             <h3>TIRES</h3>
//             <p>Balancing & Flat Repairs</p>
//             <button>SHOP NOW</button>
//             <p>5-Year Warranty</p>
//           </div>
//         </div>
//         <div className="grid-item g2">
//           <img
//             className="rounded-t-[15px]"
//             src="https://mobilecontent.costco.com/staging/resource/img/24w01226/eco-home-why-buy-apliances-img.jpg"
//             alt=""
//           />
//           <div className="hover rounded-b-[15px] mt-[-10px] bg-[#0660A4] w-[100%]">
//             <h3>TIRES</h3>
//             <p>Balancing & Flat Repairs</p>
//             <button>SHOP NOW</button>
//             <p>5-Year Warranty</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };



import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import img1 from "../../assets/d1.avif";
import img2 from "../../assets/d2.avif";
import img3 from "../../assets/d3.avif";

export const Delivery = () => {
  return (
    <div>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={4}
        className="grid-layout w-[97%] m-auto"
      >
        <GridItem colSpan={1} className="grid-item g1">
          <div className="hover bg-[#0660A4] w-[100%]">
            <h3>TIRES</h3>
            <p>Balancing & Flat Repairs</p>
            <button>SHOP NOW</button>
            <p>5-Year Warranty</p>
          </div>
        </GridItem>
        <GridItem colSpan={1} className="grid-item g2">
          <img
            className="rounded-t-[15px]"
            src="https://mobilecontent.costco.com/staging/resource/img/24w01226/eco-home-why-buy-apliances-img.jpg"
            alt=""
          />
          <div className="hover rounded-b-[15px] mt-[-10px] bg-[#0660A4] w-[100%]">
            <h3>TIRES</h3>
            <p>Balancing & Flat Repairs</p>
            <button>SHOP NOW</button>
            <p>5-Year Warranty</p>
          </div>
        </GridItem>
        <GridItem colSpan={1} className="grid-item g2">
          <img
            className="rounded-t-[15px]"
            src="https://mobilecontent.costco.com/staging/resource/img/24w01226/eco-home-why-buy-apliances-img.jpg"
            alt=""
          />
          <div className="hover rounded-b-[15px] mt-[-10px] bg-[#0660A4] w-[100%]">
            <h3>TIRES</h3>
            <p>Balancing & Flat Repairs</p>
            <button>SHOP NOW</button>
            <p>5-Year Warranty</p>
          </div>
        </GridItem>
        <GridItem colSpan={1} className="grid-item g2">
          <img
            className="rounded-t-[15px]"
            src="https://mobilecontent.costco.com/staging/resource/img/24w01226/eco-home-why-buy-apliances-img.jpg"
            alt=""
          />
          <div className="hover rounded-b-[15px] mt-[-10px] bg-[#0660A4] w-[100%]">
            <h3>TIRES</h3>
            <p>Balancing & Flat Repairs</p>
            <button>SHOP NOW</button>
            <p>5-Year Warranty</p>
          </div>
        </GridItem>
        <GridItem colSpan={1} className="grid-item g2">
          <img
            className="rounded-t-[15px]"
            src="https://mobilecontent.costco.com/staging/resource/img/24w01226/eco-home-why-buy-apliances-img.jpg"
            alt=""
          />
          <div className="hover rounded-b-[15px] mt-[-10px] bg-[#0660A4] w-[100%]">
            <h3>TIRES</h3>
            <p>Balancing & Flat Repairs</p>
            <button>SHOP NOW</button>
            <p>5-Year Warranty</p>
          </div>
        </GridItem>
        <GridItem colSpan={1} className="grid-item g2">
          <img
            className="rounded-t-[15px]"
            src="https://mobilecontent.costco.com/staging/resource/img/24w01226/eco-home-why-buy-apliances-img.jpg"
            alt=""
          />
          <div className="hover rounded-b-[15px] mt-[-10px] bg-[#0660A4] w-[100%]">
            <h3>TIRES</h3>
            <p>Balancing & Flat Repairs</p>
            <button>SHOP NOW</button>
            <p>5-Year Warranty</p>
          </div>
        </GridItem>
      </Grid>
    </div>
  );
};

export default Delivery;
