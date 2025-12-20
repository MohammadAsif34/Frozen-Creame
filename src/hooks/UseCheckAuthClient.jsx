import React, { useEffect, useState } from "react";
import { auth } from "./firebase";
import { setUser } from "../redux/slices/authSlice";
import { useDispatch } from "react-redux";

const UseCheckAuthClient = ({ children }) => {
  console.log("check auth");
  const dispatch = useDispatch();
  const fetchUser = async () => {
    auth.onAuthStateChanged(async (user) => {
      dispatch(setUser(user));
    });
  };

  useEffect(() => {
    fetchUser();
  }, []);
  return children;
};

export default UseCheckAuthClient;
