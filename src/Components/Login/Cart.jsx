import React, { useContext, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import { AuthContext } from "../AuthContext/AuthContext";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export const Cart = () => {
  const { isAuth } = useContext(AuthContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (isAuth) {
      const storedItems = JSON.parse(localStorage.getItem("cartItems")) || [];
      setData(storedItems);
    }
  }, [isAuth]);

  const removeFromCart = (ind) => {
    const updatedCartItems = [...data];
    updatedCartItems.splice(ind, 1);
    setData(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  return (
    <div>
      <Navbar />
      <div className="mb-[-200px]" >
        {data.length === 0 ? (
          <div className="flex items-center justify-center flex-col">
            <p>No Products Found in the Cart</p>
            <Link
              className="text-center text-white bg-blue-500 hover:bg-blue-800 p-3 rounded"
              to={"/"}
            >
              Add Products to Cart
            </Link>
          </div>
        ) : (
          <div>
            {data.map((e) => (
              <div key={e.id}>
                <div
                  key={e.id}
                  className="flex justify-center gap-4 items-center"
                >
                  <div className="flex row-gap-1 gap-3 bxbx p-2 m-2">
                    <img className="w-[200px]" src={e.image} alt="" />
                    <div key={e.id} className="paragraphs p-4 w-[300px] ">
                      <p> Item Name : {e.name} </p>
                      <p>Brand : {e.brand}</p>
                      <p>Description : {e.description}</p>
                      <p>Rating: {e.rating}</p>
                      <p className="text-red-500">Discount : $ {e.discount}</p>
                      <p>Price : $ {e.price}</p>
                    </div>
                  </div>
                  <div>
                    <button
                      className="bg-red-500 text-white p-2 hover:bg-red-800 rounded"
                      onClick={removeFromCart}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};
