"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { useState, useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context";
import { getItems, addItem } from "../_services/shopping-list-service";

export default function Page() {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  async function loadItems() {
    if (!user) return;
    try {
      const userItems = await getItems(user.uid);
      setItems(userItems);
    } catch (error) {
      console.error("Error loading items:", error);
    }
  }

  useEffect(() => {
    loadItems();
  }, [user]);

  async function handleAddItem(newItem) {
    if (!user) return;
    try {
      const id = await addItem(user.uid, newItem);
      const itemWithId = { id, ...newItem };
      setItems([...items, itemWithId]);
    } catch (error) {
      console.error("Error adding item:", error);
    }
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
      {user ? (
        <section>
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
        </section>
      ) : (
        <div>
          <p>Not logged in</p>
        </div>
      )}
    </main>
  );
}
