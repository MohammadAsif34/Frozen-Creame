import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { auth, db } from "./firebase";

export const useAuthBootstrap = () => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (!firebaseUser) {
        // ❌ Not logged in or token expired
        setUser(null);
        setCart([]);
        setLoading(false);
        navigate("/auth");
        return;
      }

      try {
        // 🔹 Fetch user profile
        const userRef = doc(db, "Users", firebaseUser.uid);
        const userSnap = await getDoc(userRef);

        const userData = userSnap.exists()
          ? {
              ...userSnap.data(),
              createdAt: userSnap.data().createdAt?.toMillis() || null,
            }
          : null;

        // 🔹 Fetch cart
        const cartRef = collection(db, "Users", firebaseUser.uid, "Cart");
        const cartSnap = await getDocs(cartRef);

        const cartItems = cartSnap.docs.map((d) => ({
          id: d.id,
          ...d.data(),
        }));

        setUser(userData);
        setCart(cartItems);
      } catch (err) {
        console.error("Bootstrap error:", err);
      } finally {
        console.log("USER :: ", user);
        console.log("CART :: ", cart);
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  return {
    user,
    cart,
    loading,
    isAuthenticated: !!user,
  };
};
