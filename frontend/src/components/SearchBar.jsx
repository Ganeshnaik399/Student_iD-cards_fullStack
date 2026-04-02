import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [roll, setRoll] = useState("");

  return (
    <div>
      <input
        placeholder="Search by Roll No"
        value={roll}
        onChange={(e) => setRoll(e.target.value)}
      />
      <button onClick={() => onSearch(roll)}>Search</button>
    </div>
  );
}

export default SearchBar;