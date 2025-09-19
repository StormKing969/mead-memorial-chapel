import React, { useState } from "react";
import {authFunctions} from "~/lib/firebase";

const Authentication = () => {
  const { logoutFunction, registerFunction, loginFunction } = authFunctions();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <section className={"p-6 bg-white shadow-md rounded-lg space-y-4"}>
      <input
        type="email"
        placeholder="Email"
        className={"border px-3 py-2 w-full"}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className={"border px-3 py-2 w-full"}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className={"flex gap-2"}>
        <button
          onClick={() => registerFunction(email, password)}
          className={"bg-green-600 text-white px-4 py-2 rounded"}
        >
          Register
        </button>
        <button
          onClick={() => loginFunction(email, password)}
          className={"bg-blue-600 text-white px-4 py-2 rounded"}
        >
          Login
        </button>
        <button
          onClick={() => logoutFunction()}
          className={"bg-gray-600 text-white px-4 py-2 rounded"}
        >
          Logout
        </button>
      </div>
    </section>
  );
};

export default Authentication;