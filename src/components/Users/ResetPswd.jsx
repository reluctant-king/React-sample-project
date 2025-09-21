import React, { useState } from "react";

const ResetPwd = () => {
  const [passwords, setPasswords] = useState({ newPassword: "", confirmPassword: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPasswords((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passwords.newPassword !== passwords.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Reset Password:", passwords.newPassword);
  };

  return (
    <div className="max-w-md mx-auto mt-1 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb- text-center">Reset Password</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="password"
          name="newPassword"
          placeholder="New Password"
          value={passwords.newPassword}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={passwords.confirmPassword}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button
          type="submit"
          className="w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600 transition"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ResetPwd;
