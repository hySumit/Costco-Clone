import React, { useContext, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import { AuthContext } from "../AuthContext/AuthContext";
import { useEffect } from "react";

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
      <div>
        {data.map((e) => (
          <div key={e.id}>
            <img src={e.image} alt="" />
            <button onClick={removeFromCart}>Remove</button>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};
