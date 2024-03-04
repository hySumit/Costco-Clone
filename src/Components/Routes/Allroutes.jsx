import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { Home } from "../Home/Home";
import SlideImages from "../Home/Slider";
import { Products } from "../Products/Products";
import { Delivery } from "../DeliveryPage/Delivery";
import { Products2 } from "../Products/Products2";
import { Slider2 } from "../Home/Slider2";
import { ProductGrid } from "../Products/ProductGrid";
import { Footer } from "../Footer/Footer";

export const Allroutes = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <SlideImages />
      <Products />
      <Delivery />
      <Products2 />
      <Slider2 />
      <ProductGrid />
      <Footer />
    </div>
  );
};
