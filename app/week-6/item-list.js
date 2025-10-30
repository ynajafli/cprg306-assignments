"use client";

import Item from "./item";
import { useState } from "react";
import itemData from "./items.json"

export default function ItemList() {

  let itemArray = itemData.map( (item) => ( {...item} ) )
  
  const [sortBy, setSortBy] = useState("name");
  
  if (sortBy == "name") itemArray = itemArray.sort((a, b) => a.name.localeCompare(b.name));
  if (sortBy == "category") itemArray = itemArray.sort((a, b) => a.category.localeCompare(b.category));

  return (
    <div className="p-4">
      <div>
        <label>Sort by:</label>
        <button 
          className={`mx-2 px-4 py-2 rounded ${sortBy === "name" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          type="button" 
          onClick={() => setSortBy("name")}
        >
          name
        </button>
        <button 
          className={`mx-2 px-4 py-2 rounded ${sortBy === "category" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          type="button" 
          onClick={() => setSortBy("category")}
        >
          category
        </button>
      </div>
      <ul className="space-y-4">
        {itemArray.map((item) => (
          <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category}/>
        ))}
      </ul>
    </div>
  );
}

{/* <button type="button" onClick={resetForm}>Reset Form</button> */}