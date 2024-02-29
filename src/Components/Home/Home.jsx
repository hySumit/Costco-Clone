import React from "react";
import { Grid, GridItem, Box, Image } from "@chakra-ui/react";
import Banner from '../../assets/banner1.avif'
import gItem1 from '../../assets/GridItem1.avif'
import gItem2 from '../../assets/GridItem2.avif'
import gItem3 from '../../assets/GridItem3.avif'
import gItem4 from '../../assets/GridItem4.avif'
import '../Home/Home.css'
import SlideImages from "./Slider";

export const Home = () => {
  return (
    <div>
      <Grid
        h="500px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={1} colSpan={5} >
          <Box className="bg-[#92E155] text-center font-bold pt-4 items-center" style={{ borderRadius: "10px", width: "98%", margin: "auto" }}>
            <h1 className="text-3xl" >4 New Deals Daily!</h1>
            <Image src={Banner} style={{ borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px" }} />
          </Box>
        </GridItem>

        {/* Grid Item 1 */}
        <Box colSpan={1} className="rounded-lg" style={{ gridColumn: "span 1", padding: "1rem", margin: "auto" }}>
          <Box className="bg-[#DDE4E4] text-[#0E5065]" style={{ borderRadius: "15px" }}>
            <h1 className="text-4xl font-bold" >$500 <span className="text-2xl" >OFF</span> </h1>
            <h5>Zealand</h5>
            <p>DINING TABLE SET</p>
            <Image src={gItem1} />
          </Box>
        </Box>

        {/* Grid Item 2 */}
        <Box colSpan={1} className="rounded-lg" style={{ gridColumn: "span 1", padding: "1rem", margin: "auto" }}>
          <Box className="bg-[#DDE4E4] text-[#0E5065]" style={{ borderRadius: "15px" }}>
            <h1 className="text-4xl font-bold" >$20 <span className="text-2xl" >OFF</span> </h1>
            <h5>Simplehuman</h5>
            <p>PET FOOD CAN</p>
            <Image src={gItem2} />
          </Box>
        </Box>

        {/* Grid Item 3 */}
        <Box colSpan={1} className="rounded-lg" style={{ gridColumn: "span 1", padding: "1rem", margin: "auto" }}>
          <Box className="bg-[#DDE4E4] text-[#0E5065]" style={{ borderRadius: "15px" }}>
            <h1 className="text-4xl font-bold" >$50 <span className="text-2xl" >OFF</span> </h1>
            <h5>Klipsch</h5>
            <p>PARTY SPEAKER</p>
            <Image src={gItem3} />
          </Box>
        </Box>

        {/* Grid Item 4 */}
        <Box colSpan={1} className="rounded-lg" style={{ gridColumn: "span 1", padding: "1rem", margin: "auto" }}>
          <Box className="bg-[#DDE4E4] text-[#0E5065]" style={{ borderRadius: "15px" }}>
            <h1 className="text-4xl font-bold" >$20 <span className="text-2xl" >OFF</span> </h1>
            <h5>Aluratek</h5>
            <p>APPLE CAR PLAY</p>
            <Image src={gItem4} />
          </Box>
        </Box>
      </Grid>


      {/* slider */}

    </div>
  );
};
