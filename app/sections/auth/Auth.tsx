import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "@firebase/auth";
import { auth } from "~/lib/firebase";

const Auth = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const register = async () => {
    await createUserWithEmailAndPassword(auth, email, password);
  };

  const login = async () => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <section className="p-6 bg-white shadow-md rounded-lg space-y-4">
      <input
        type="email"
        placeholder="Email"
        className="border px-3 py-2 w-full"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="border px-3 py-2 w-full"
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="flex gap-2">
        <button
          onClick={register}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Register
        </button>
        <button
          onClick={login}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Login
        </button>
        <button
          onClick={logout}
          className="bg-gray-600 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>
    </section>
  );
};

export default Auth;