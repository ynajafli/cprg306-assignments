"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemData from "./items.json";
import { useState } from "react";

export default function Page() {
  const [items, setItems] = useState(
    itemData.map( (item) => ( {...item} ) )
  );

  function handleAddItem(newItem) {
    setItems( [...items, newItem] )
  }



  return (
    <main>
      <h1 className="p-4 text-4xl">Shopping List</h1>
      <NewItem onAddItem={handleAddItem}/>
      <ItemList items={items}/>
    </main>
  );
}