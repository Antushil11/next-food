"use client";
import { CartContext } from "@/context/CartProvider";
import React, { use, useState } from "react";

const CartButton = ({food}) => {
  const [inCart, setIncart] = useState(false);
  const {addToCart} = use(CartContext)
  const handleadd2Cart=() =>{
    addToCart(food);
    setIncart(true)
  }

  return (
    <button
      onClick={handleadd2Cart}
      disabled={inCart}
      className="flex-1 bg-green-600 text-white py-3 rounded-lg disabled:bg-amber-600 hover:bg-green-700 transition"
    >
      {inCart ? "Added " : "Add to Cart"}
    </button>
  );
};

export default CartButton;
