import {
  doc,
  updateDoc,
  increment,
  getDoc,
  deleteDoc,
  setDoc,
} from "firebase/firestore";
import { auth, db } from "../hooks/firebase";

export const AddToCart = async (cake) => {
  const user = auth.currentUser;
  if (!user) {
    return "User not Authenticted";
  }
  const cartItemRef = doc(db, "User", user.uid, "Cart", cake._id);
  const snap = await getDoc(cartItemRef);
  if (!snap.exists()) {
    await setDoc(cartItemRef, {
      ...cake,
      quantity: 1,
      addedAt: new Date().toISOString(),
    });
    return "Item added";
  }
  return "Item already added";
};

export const updateCart = async (productId, type) => {
  const user = auth.currentUser;
  if (!user) throw new Error("User not logged in");

  const cartRef = doc(db, "User", user.uid, "Cart", productId);
  const snap = await getDoc(cartRef);

  if (!snap.exists()) throw new Error("Item not found");

  const currentQty = snap.data().quantity;

  // Increase quantity
  if (type === "increase") {
    await updateDoc(cartRef, {
      quantity: increment(1),
    });
  }

  // Decrease quantity
  if (type === "decrease") {
    if (currentQty > 1) {
      await updateDoc(cartRef, {
        quantity: increment(-1),
      });
    } else {
      // If qty becomes 0 → remove item
      await deleteDoc(cartRef);
    }
  }

  // Delete Item
  if (type === "delete") {
    await deleteDoc(cartRef);
  }
};
