import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "../hooks/firebase";

export const orderPlaceCOD = async (order) => {
  const user = auth.currentUser;
  if (!user) {
    return "User not Authenticted";
  }
  const orderRef = doc(db, "orders", user.uid, "order", order.orderId);
  const snap = await getDoc(orderRef);
  if (!snap.exists()) {
    await setDoc(orderRef, {
      ...order,
      paymentType: "COD",
      status: "Order Placed",
    });

    return "order Placed";
  }
  return "Something error";
};
