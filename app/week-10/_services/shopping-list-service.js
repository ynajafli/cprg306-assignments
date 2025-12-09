import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function getItems(userId) {
  const items = [];

  const itemsRef = collection(db, "users", userId, "items");
  const q = query(itemsRef);

  const snapshot = await getDocs(q);

  snapshot.forEach((docSnap) => {
    items.push({
      id: docSnap.id,
      ...docSnap.data(),
    });
  });

  return items;
}

export async function addItem(userId, item) {
  const itemsRef = collection(db, "users", userId, "items");
  const docRef = await addDoc(itemsRef, item);
  return docRef.id;
}
