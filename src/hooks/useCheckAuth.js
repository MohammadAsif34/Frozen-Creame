import { useEffect, useState } from "react";
import { onAuthStateChanged, getIdTokenResult } from "firebase/auth";
import { auth, db } from "../hooks/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { setUser, clearUser } from "../redux/slices/authSlice";
import { clearProfile } from "../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";

const useCheckAuth = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      try {
        // ❌ Not logged in
        const u = auth.currentUser;
        if (!u) navigate("/auth");
        if (!user) {
          dispatch(clearUser());
          dispatch(clearProfile());
          navigate("/auth");
          setLoading(false);
          return;
        }

        // 🔐 Check token validity
        const tokenResult = await getIdTokenResult(user, true);

        if (tokenResult.tokenExpired) {
          await auth.signOut();
          dispatch(clearUser());
          dispatch(clearProfile());
          navigate("/auth");
          setLoading(false);
          return;
        }

        // ✅ Set auth user
        // dispatch(setUser(user));
        const authUser = auth.currentUser;
        if (!authUser) {
          console.warn("No user login");
          return;
        }
        // 📦 Fetch user profile from Firestore
        const userRef = doc(db, "users", authUser.uid);
        const snap = await getDoc(userRef);

        if (!snap.exists()) {
          console.warn("Doc does not exist in firestore");
          return null;
        }

        dispatch(setUser(snap.data()));

        setLoading(false);
      } catch (error) {
        console.error("Auth check failed:", error);
        await auth.signOut();
        dispatch(clearUser());
        dispatch(clearProfile());
        navigate("/auth");
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate, clearProfile, clearUser]);

  return { loading };
};

export default useCheckAuth;
