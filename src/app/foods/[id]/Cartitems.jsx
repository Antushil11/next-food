"use client";
import { CartContext } from '@/context/CartProvider';
import React, { use } from 'react';

const Cartitems = () => {

    const {cart} = use(CartContext)
    return (
        <div>
            {cart.length} cart items
        </div>
    );
};

export default Cartitems;