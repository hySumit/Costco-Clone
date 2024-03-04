import React from "react";
import { Grid, GridItem, Box, Image } from "@chakra-ui/react";
import Banner from "../../assets/banner1.avif";
import "../Home/Home.css";
import { jsonData } from "../../../db";
import SlideImages from "./Slider";
import { Link } from "react-router-dom";

export const Home = () => {
  const gridItems = jsonData.map((product) => (
    <Box
      key={product.product_id}
      colSpan={1}
      className="rounded-lg"
      style={{ padding: "1rem", margin: "auto" }}
    >
      <Box
        className="bg-[#DDE4E4] text-[#0E5065]"
        style={{ borderRadius: "15px" }}
      >
        <h1 className="text-4xl font-bold">
          ${product.discount} <span className="text-2xl">OFF</span>{" "}
        </h1>
        <h5>{product.brand}</h5>
        <p>{product.name}</p>

        <Link
          to={`/product/${product.product_id}`}
          style={{ textDecoration: "none" }}
        >
          <Image src={product.image} alt={product.name} />
        </Link>

      </Box>
    </Box>
  ));

  return (
    <div className="gr">
      <Grid
        h="auto"
        templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr 1fr" }}
        gap={4}
        className="g"
      >
        <GridItem colSpan={{ base: 1, md: 2, lg: 5 }} className="gr">
          <Box
            className="bg-[#92E155] text-center font-bold pt-4 items-center"
            style={{ borderRadius: "10px", width: "98%", margin: "auto" }}
          >
            <h1 className="text-3xl">4 New Deals Daily!</h1>
            <Image
              src={Banner}
              style={{
                borderBottomLeftRadius: "10px",
                borderBottomRightRadius: "10px",
              }}
            />
          </Box>
        </GridItem>

        {/* Render grid items dynamically */}
        {gridItems}
      </Grid>

      {/* slider */}
      {/* <SlideImages /> */}
    </div>
  );
};
