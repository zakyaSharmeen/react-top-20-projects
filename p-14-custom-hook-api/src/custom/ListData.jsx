import React from "react";
import useFetch from "./UseFetch";

function ListData() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-3">User List</h2>
      <ul>
        {data.map((user) => (
          <li key={user.id} className="border p-2 rounded mb-2">
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListData;
