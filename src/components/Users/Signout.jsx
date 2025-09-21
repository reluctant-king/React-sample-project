import React from "react";

const SignOut = ({ onSignOut }) => {
  return (
    <div className="max-w-sm mx-auto mt-20 p-6 bg-white shadow-md rounded-lg text-center">
      <h1 className="text-2xl font-bold mb-4">Sign Out</h1>
      <p className="mb-6">Are you sure you want to sign out?</p>
      <button
        onClick={onSignOut}
        className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition"
      >
        Sign Out
      </button>
    </div>
  );
};

export default SignOut;
