import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="p-6 max-w-3xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-4">Home Page</h1>
      <p className="mb-6 text-lg">Welcome to EntryPoint!</p>
      <button
        onClick={() => navigate("/resources")}
        className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        More Resources
      </button>
    </div>
  );
}