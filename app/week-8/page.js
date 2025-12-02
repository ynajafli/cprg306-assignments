"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemData from "./items.json";
import MealIdeas from "./meal-ideas";
import { useState } from "react";

export default function Page() {
  const [items, setItems] = useState(
    itemData.map((item) => ({ ...item }))
  );

  const [selectedItemName, setSelectedItemName] = useState("");

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  function handleItemSelect(item) {
    if (!item || !item.name) return;

    let cleanedName = item.name.split(",")[0];
    cleanedName = cleanedName.replace(/[^\p{L}\p{N}\s]/gu, "");
    cleanedName = cleanedName.trim();
    setSelectedItemName(cleanedName);
  }

  return (
    <main className="p-4">
      <h1 className="text-4xl mb-4">Shopping List</h1>

      <div className="flex gap-8">
        <div className="flex-1">
          <NewItem onAddItem={handleAddItem} />
          <ItemList
            items={items}
            onItemSelect={handleItemSelect} 
          />
        </div>

        <div className="flex-1">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
