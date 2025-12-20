import React, { useEffect, useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  getRedirectResult,
  signInWithPopup,
} from "firebase/auth";
import { auth, db, googleProvider } from "../../hooks/firebase";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const [step, setStep] = useState(1);
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  /* ✅ HANDLE REDIRECT RESULT */
  useEffect(() => {
    const handleRedirect = async () => {
      const result = await getRedirectResult(auth);

      if (result?.user) {
        const user = result.user;

        // Check if user already exists
        const userRef = doc(db, "users", user.uid);
        const snap = await getDoc(userRef);

        if (!snap.exists()) {
          await setDoc(userRef, {
            email: user.email,
            first_name: user.displayName || "",
            createdAt: new Date().toISOString(),
            provider: "google",
          });
        }

        navigate("/dashboard"); // ✅ redirect after login
      }
    };

    handleRedirect();
  }, []);

  // Step 1: Email validation
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) return alert("Enter a valid email");
    setStep(2);
  };

  // Step 2: Login / Register
  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
      alert("Authentication successful");
    } catch (err) {
      alert(err.message);
    }
    setLoading(false);
  };

  // Google Auth
  const handleGoogleAuth = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      const user = auth.currentUser;
      if (!user) return;

      const userRef = doc(db, "users", user.uid);
      const snap = await getDoc(userRef);

      // Create user ONLY if not exists
      if (!snap.exists()) {
        await setDoc(userRef, {
          uid: user.uid,
          email: user.email,
          first_name: user.displayName || "",
          photo: user.photoURL || "",
          provider: "google",
          createdAt: new Date(),
        });
      }
      toast.success("Logged in with Google");
      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-rose-100 via-pink-100 to-amber-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        {/* Title */}

        <h2 className="text-2xl font-bold text-rose-600 text-center mb-6">
          {isLogin ? "Login to Frozen Kreme" : "Create Your Account"}
        </h2>

        {/* STEP 1: EMAIL */}
        {step === 1 && (
          <form onSubmit={handleEmailSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <button
              type="submit"
              className="w-full bg-rose-500 text-white py-3 rounded-lg font-semibold hover:bg-rose-600 transition"
            >
              Continue
            </button>
          </form>
        )}

        {/* STEP 2: PASSWORD */}
        {step === 2 && (
          <form onSubmit={handlePasswordSubmit} className="space-y-4">
            <p className="text-sm text-gray-600">
              Email: <span className="font-semibold">{email}</span>
            </p>

            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-rose-500 text-white py-3 rounded-lg font-semibold hover:bg-rose-600 transition"
            >
              {loading ? "Please wait..." : isLogin ? "Login" : "Register"}
            </button>
          </form>
        )}
        <div className="my-8 border border-gray-300 relative">
          <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-white px-4">
            or
          </span>
        </div>

        {/* Google Auth */}
        <div className="mt-6">
          <button
            onClick={handleGoogleAuth}
            className="w-full border border-gray-300 py-3 rounded-lg text-sm hover:bg-gray-50 transition flex justify-center gap-2 text-gray-500"
          >
            <img src="/images/google.png" alt="" className="w-5 h-5" />
            Continue with Google
          </button>
        </div>

        {/* Toggle */}
        <div className="text-center mt-6 text-sm">
          {isLogin ? (
            <>
              Don’t have an account?{" "}
              <button
                onClick={() => {
                  setIsLogin(false);
                  setStep(1);
                }}
                className="text-rose-500 font-semibold"
              >
                Register
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                onClick={() => {
                  setIsLogin(true);
                  setStep(1);
                }}
                className="text-rose-500 font-semibold"
              >
                Login
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
