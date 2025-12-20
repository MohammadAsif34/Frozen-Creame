import { collection, getDocs } from "firebase/firestore";
import { auth, db } from "../hooks/firebase";

export async function getOrderList() {
  const user = auth.currentUser;

  if (!user) {
    throw new Error("User not authenticated");
  }

  const orderRef = collection(db, "orders", user.uid, "order");

  const snapshot = await getDocs(orderRef);

  const orderList = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return orderList;
}
