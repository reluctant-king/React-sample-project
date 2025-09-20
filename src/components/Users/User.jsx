import React from "react";

const users = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "admin" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "user" },
];

const Users = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Users</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-gradient-to-br from-white via-blue-50 to-blue-100 border border-blue-200 rounded-xl shadow-lg p-8 flex flex-col items-center transition-transform hover:scale-105 hover:shadow-xl"
          >
            <div className="w-20 h-20 bg-blue-200 rounded-full flex items-center justify-center mb-4 shadow-inner border-4 border-blue-300">
              <span className="text-3xl font-bold text-blue-700">{user.name.charAt(0)}</span>
            </div>
            <h2 className="text-xl font-semibold mb-2 text-blue-900">{user.name}</h2>
            <p className="text-gray-700 mb-1">{user.email}</p>
            <span className="px-4 py-1 bg-blue-300 text-blue-900 rounded-full text-sm font-medium mb-4 capitalize">
              {user.role}
            </span>
            <div className="flex gap-3 mt-4">
              <button className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition">
                View/Edit
              </button>
              <button className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
