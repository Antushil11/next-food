"use client"
import React from 'react';

const CartButton = () => {
    return (
       
            <button
            onClick={() => onAddToCart(food)}
            className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            Add to Cart
          </button>
            
        
    );
};

export default CartButton;