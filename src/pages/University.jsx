import React, { useState } from "react";
import usUniversities from "../data/filterUS";

export default function University({ onSelectUniversity }) {
  const [search, setSearch] = useState("");

  const filteredUniversities = usUniversities.filter(u =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "1rem", maxHeight: "80vh", overflowY: "auto" }}>
      <h1>Select Your University 🇺🇸</h1>
      <input
        type="text"
        placeholder="Search universities..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem" }}
      />

      <ul style={{ listStyle: "none", paddingLeft: 0, margin: 0 }}>
        {filteredUniversities.map(uni => (
          <li
            key={uni.name}
            tabIndex={0}
            style={{
              padding: "0.5rem",
              borderBottom: "1px solid #ddd",
              cursor: "pointer",
              transition: "background-color 0.2s",
            }}
            onClick={() => onSelectUniversity(uni)}
            onKeyDown={e => {
              if (e.key === "Enter" || e.key === " ") {
                onSelectUniversity(uni);
              }
            }}
            onMouseOver={e => e.currentTarget.style.backgroundColor = "#f0f8ff"}
            onMouseOut={e => e.currentTarget.style.backgroundColor = "transparent"}
          >
            <a
              href={uni.web_pages[0]}
              target="_blank"
              rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
              style={{ textDecoration: "none", color: "#004080" }}
            >
              {uni.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
