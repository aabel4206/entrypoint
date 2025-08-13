import { Link } from "react-router-dom";

export default function Dashboard({ selectedUniversity, setSelectedUniversity }) {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      {selectedUniversity && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-3">Welcome to {selectedUniversity.name}</h2>
          <button
            onClick={() => setSelectedUniversity(null)}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Change University
          </button>
        </div>
      )}

      <nav>
        <ul className="space-y-3">
          <li>
            <Link
              to="/checklist"
              className="text-blue-600 hover:underline text-lg"
            >
              Edit Checklist ✅
            </Link>
          </li>
          <li>
            <Link
              to="/resources"
              className="text-blue-600 hover:underline text-lg"
            >
              Edit Resources 📚
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="text-blue-600 hover:underline text-lg"
            >
              Back to Home 🏠
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
