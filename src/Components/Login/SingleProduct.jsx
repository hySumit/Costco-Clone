import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { jsonData } from "../../../db";
import Navbar from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import { TbTruckDelivery } from "react-icons/tb";
import { AuthContext } from "../AuthContext/AuthContext";

export const SingleProduct = () => {
  const { isAuth } = useContext(AuthContext);
  const { productId } = useParams();
  const product = jsonData.find(
    (p) => p.product_id === parseInt(productId, 10)
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  const AddToCart = () => {
    if (isAuth) {
      const oldItems = JSON.parse(localStorage.getItem("cartItems")) || [];

      if (Array.isArray(oldItems)) {
        oldItems.push(product);
        localStorage.setItem("cartItems", JSON.stringify(oldItems));
        console.log("Item added to cart:", product);
      } else {
        console.log("'cartItems' in localStorage is not an array");
      }
    } else {
      console.log("User is not authenticated");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-around items-center mb-[-200px]">
      <img src={product.image} alt={product.name} width={"300px"} />
        <div className="products">
          <p> Item Name : {product.name} </p>
          <p>Brand : {product.brand}</p>
          <p>Description : {product.description}</p>
          <p>Rating: {product.rating}</p>
          <p className="text-red-500">Discount : $ {product.discount}</p>
          <p>Price : $ {product.price}</p>
          
        </div>

        <div>
          <p>Delivery</p>
          <div>
            <TbTruckDelivery />
            <p className="text-green-800 font-bold">
              Earliest Wednesday, March 6{" "}
              <span className="text-black font-sans">if ordered now</span>
            </p>
            <p>
              Delivery ZIP Code: 845438{" "}
              <span className="text-blue-500 hover:underline">Change</span>
            </p>
            <div className="flex gap-3">

            <button
              onClick={AddToCart}
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
            >
              Add to Cart
            </button>
            <Link  className="bg-green-500 text-white p-2 rounded hover:bg-blue-700" to={"/cart"} >
              Go to Cart
            </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
