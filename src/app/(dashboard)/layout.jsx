import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen  flex">
      {/* Sidebar */}
      <aside className="w-64 rounded-2xl bg-white shadow-md p-6 hidden md:block">
        <h2 className="text-2xl text-black font-bold mb-6">Dashboard</h2>
        <ul className="space-y-4 text-gray-900">
          <li className="hover:text-blue-500 cursor-pointer">User List</li>
          <li className="hover:text-blue-500 cursor-pointer">Add User</li>
          <li className="hover:text-blue-500 cursor-pointer">Settings</li>
          <li className="hover:text-red-500 cursor-pointer">Logout</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
};

export default DashboardLayout;
