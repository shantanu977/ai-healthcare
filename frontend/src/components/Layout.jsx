// components/Layout.jsx
import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white px-6 py-3 flex justify-between">
        <h1 className="text-xl font-bold">MediLink AI</h1>
        <div className="space-x-6">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/chat" className="hover:underline">Chat</Link> {/* ✅ New Chat Page */}
          <Link to="/reports" className="hover:underline">Reports</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </div>
      </nav>

      {/* Page Content */}
      <main className="p-6 flex-1">
        <Outlet />
      </main>
    </div>
  );
}
