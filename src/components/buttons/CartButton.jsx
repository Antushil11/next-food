"use client";
import React, { useState } from "react";

const CartButton = () => {
  const [inCart, setIncart] = useState(false);

  const handleadd2Cart = () => {
    setIncart(true);
  };

  return (
    <button
      onClick={handleadd2Cart}
      disabled={inCart}
      className="flex-1 bg-green-600 text-white py-2 rounded-lg disabled:bg-amber-600 hover:bg-green-700 transition"
    >
      {inCart ? "Added " : "Add to Cart"}
    </button>
  );
};

export default CartButton;
