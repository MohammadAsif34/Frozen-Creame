import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { auth, db } from "../../hooks/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useEffect } from "react";

const ProfileEdit = () => {
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    phone_number: "",
    photo: "",
  });

  useEffect(() => {
    const getUser = async () => {
      try {
        const u = auth.currentUser;

        const snap = await getDoc(doc(db, "users", u.uid));
        // console.log(user);
        setForm({
          first_name: snap.data().first_name || "",
          last_name: snap.data().last_name || "",
          phone_number: snap.data().phone_number || "",
          photo: snap.data().photo || "",
        });
      } catch (err) {
        console.log("login error:: ", err);
      } finally {
        setLoading(false);
      }
    };
    getUser();
  }, []);
  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleUpdateUser = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const user = auth.currentUser;
      if (!user) {
        toast.error("User not authenticated");
        return;
      }
      const userRef = doc(db, "users", user.uid);
      await updateDoc(userRef, { ...form, updatedAt: Date.now() });
      toast.success("User Updated");
    } catch (error) {
      toast.error(error || "Update error");
    } finally {
      setLoading(false);
    }
    // toast.info("working");
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Edit Profile</h2>

      <form
        className="bg-white p-6 rounded shadow space-y-4"
        onSubmit={(e) => handleUpdateUser(e)}
      >
        <label>First name</label>
        <input
          type="text"
          name="first_name"
          value={form.first_name}
          onChange={(e) => handleChange(e)}
          className="w-full p-2 border rounded"
          placeholder="First Name"
        />
        <label>Last name</label>
        <input
          name="last_name"
          value={form.last_name}
          onChange={(e) => handleChange(e)}
          className="w-full p-2 border rounded"
          placeholder="Last Name"
        />
        <label>Phone number</label>
        <input
          name="phone_number"
          value={form.phone_number}
          onChange={(e) => handleChange(e)}
          className="w-full p-2 border rounded"
          placeholder="Phone Number"
        />
        <label>Photo URL</label>
        <input
          name="photo"
          value={form.photo}
          onChange={(e) => handleChange(e)}
          className="w-full p-2 border rounded"
          placeholder="enter vaild photo url"
        />
        <button
          type="submit"
          className="bg-pink-600 text-white px-4 py-2 rounded"
        >
          {loading ? "Changing" : "Save Changes"}
        </button>
      </form>
    </div>
  );
};

export default ProfileEdit;
