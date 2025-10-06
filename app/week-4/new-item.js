"use client";

import { useState } from "react";

export default function NewItem() {

    const [quantity, setQuantity] = useState(1);

    const increment = () => quantity < 20 ? setQuantity(quantity + 1) : null;

    const decrement = () => quantity > 1 ? setQuantity(quantity - 1) : null;

    let incrementButtonStyle = "bg-green-700 hover:bg-green-500 text-white rounded p-2 cursor-pointer transition-colors active:bg-amber-700";
    let decrementButtonStyle = "bg-red-700 hover:bg-red-500 text-white rounded p-2 cursor-pointer transition-colors active:bg-amber-700";
    if (quantity === 20) {
        incrementButtonStyle = "text-white rounded p-2 bg-gray-700";
    }

    if (quantity === 1) {
        decrementButtonStyle ="text-white rounded p-2 bg-gray-700";
    }





    return(
        <div>
            <p>{quantity}</p>
            <button onClick={decrement} className={decrementButtonStyle}>-</button>
            <button onClick={increment} className={incrementButtonStyle}>+</button>
        </div>
    );
}