"use client";

import { useState } from "react";

export default function NewItem() {

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    const handleSubmit = (event) => {
        event.preventDefault();

        let item = {
            name: name,
            quantity: quantity,
            category: category
        }

        console.log(item);
        alert(`Added item: ${name}, quantity: ${quantity}, category: ${category}`);

        setName("");
        setQuantity(1);
        setCategory("produce");
    }

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


//flex items-center space-x-2


    return(
        <div className="flex justify-center mt-4">
            <form onSubmit={handleSubmit}>
                <div className="mb-2">
                    <input type="text" className="bg-white rounded mt-1 p-2" placeholder="Item name" value={name} onChange={(e) => setName(e.target.value)} required/>
                </div>
                <div className="bg-white flex justify-between mb-2">
                    <p>{quantity}</p>
                    <div>
                        <button onClick={decrement} type="button" className={decrementButtonStyle}>-</button>
                        <button onClick={increment} type="button" className={incrementButtonStyle}>+</button>
                    </div>
                </div>
                <div className="mb-2">
                    <select className="bg-white p-2" value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="produce">Produce</option>
                        <option value="dairy">Dairy</option>
                        <option value="bakery">Bakery</option>
                        <option value="meat">Meat</option>
                        <option value="frozen foods">Frozen Foods</option>
                        <option value="canned goods">Canned Goods</option>
                        <option value="dry goods">Dry Goods</option>
                        <option value="beverages">Beverages</option>
                        <option value="snacks">Snacks</option>
                        <option value="household">Household</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div>
                    <button className="bg-blue-600 w-11" type="submit">+</button>
                </div>
            </form>
        </div>
    );
}