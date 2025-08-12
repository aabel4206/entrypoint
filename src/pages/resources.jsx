import { useState } from "react";
import resources from "../data/resources";

export default function Resources({ selectedUniversity }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");

  const categories = ["All", ...new Set(resources.map(r => r.category))];

  const filteredResources = resources.filter(r => {
    const matchesCategory = categoryFilter === "All" || r.category === categoryFilter;
    const matchesSearch =
      r.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Resources Hub</h1>

      {selectedUniversity && (
        <h2 className="text-xl font-semibold mb-6">
          Resources for {selectedUniversity.name}
        </h2>
      )}

      <div className="flex flex-wrap gap-4 mb-6">
        <input
          type="text"
          placeholder="Search resources..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="flex-grow p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          value={categoryFilter}
          onChange={e => setCategoryFilter(e.target.value)}
          className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <ul>
        {filteredResources.map(resource => (
          <li key={resource.id} className="mb-6 border-b pb-4">
            <strong className="text-lg">{resource.name}</strong>{" "}
            <em className="text-gray-600">({resource.category})</em>
            <p className="my-1">{resource.description}</p>
            <a
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Visit website
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}