import { collection, getDocs } from "firebase/firestore";
import { auth, db } from "../hooks/firebase";

export async function getCartList() {
  console.log(auth.currentUser);
  const user = auth.currentUser;

  if (!user) {
    throw new Error("User not authenticated");
  }

  const cartItemsRef = collection(db, "User", user.uid, "Cart");

  const snapshot = await getDocs(cartItemsRef);

  const cartList = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return cartList;
}
