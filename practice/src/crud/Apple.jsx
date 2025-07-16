// import { useState } from "react";

// export default function Apple() {
//   const [items, setItems] = useState([]);
//   const [input, setInput] = useState("");
//   const [editId, setEditId] = useState(null);

//   const addItem = () => {
//     if (!input.trim()) return;
//     setItems([...items, { id: Date.now(), title: input }]);
//     setInput("");
//   };

//   const updateItem = () => {
//     if (!input.trim() || editId === null) return;
//     setItems(
//       items.map((item) =>
//         item.id === editId ? { ...item, title: input } : item
//       )
//     );
//     setEditId(null);
//     setInput("");
//   };

//   const deleteItem = (id) => {
//     setItems(items.filter((item) => item.id !== id));
//   };

//   const editItem = (item) => {
//     setEditId(item.id);
//     setInput(item.title);
//   };

//   return (
//     <div>
//       <h2>Simple CRUD</h2>
//       <input
//         type="text"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         placeholder="Enter item"
//       />
//       {editId ? (
//         <button onClick={updateItem}>Update</button>
//       ) : (
//         <button onClick={addItem}>Add</button>
//       )}
//       <ul>
//         {items.map((item) => (
//           <li key={item.id}>
//             <span>{item.title}</span>
//             <div>
//               <button onClick={() => editItem(item)}>Edit</button>
//               <button onClick={() => deleteItem(item.id)}>Delete</button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// ----------------------------

// fetch
// import { useEffect, useState } from "react";

// export default function SimpleCRUD() {
//   const [items, setItems] = useState([]);
//   const [input, setInput] = useState("");
//   const [editId, setEditId] = useState(null);

//   const API_URL = "https://example.com/items"; // Replace with your real API endpoint

//   // Fetch items when component mounts
//   useEffect(() => {
//     fetchItems();
//   }, []);

//   const fetchItems = async () => {
//     const res = await fetch(API_URL);
//     const data = await res.json();
//     setItems(data);
//   };

//   const addItem = async () => {
//     if (!input.trim()) return;
//     const res = await fetch(API_URL, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ title: input }),
//     });
//     if (res.ok) {
//       fetchItems(); // Refresh list
//       setInput("");
//     }
//   };

//   const updateItem = async () => {
//     if (!input.trim() || !editId) return;
//     const res = await fetch(`${API_URL}/${editId}`, {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ title: input }),
//     });
//     if (res.ok) {
//       fetchItems();
//       setEditId(null);
//       setInput("");
//     }
//   };

//   const deleteItem = async (id) => {
//     const res = await fetch(`${API_URL}/${id}`, {
//       method: "DELETE",
//     });
//     if (res.ok) {
//       fetchItems();
//     }
//   };

//   const editItem = (item) => {
//     setEditId(item.id);
//     setInput(item.title);
//   };

//   return (
//     <div>
//       <h2>Simple CRUD with Fetch</h2>
//       <input
//         type="text"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         placeholder="Enter item"
//       />
//       {editId ? (
//         <button onClick={updateItem}>Update</button>
//       ) : (
//         <button onClick={addItem}>Add</button>
//       )}
//       <ul>
//         {items.map((item) => (
//           <li key={item.id}>
//             <span>{item.title}</span>
//             <button onClick={() => editItem(item)}>Edit</button>
//             <button onClick={() => deleteItem(item.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// ------------------axious
// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function SimpleCRUDAxios() {
//   const [items, setItems] = useState([]);
//   const [input, setInput] = useState("");
//   const [editId, setEditId] = useState(null);

//   const API_URL = "https://example.com/items"; // Replace with your real API

//   // Fetch items when component mounts
//   useEffect(() => {
//     fetchItems();
//   }, []);

//   const fetchItems = async () => {
//     try {
//       const res = await axios.get(API_URL);
//       setItems(res.data);
//     } catch (err) {
//       console.error("Fetch error:", err);
//     }
//   };

//   const addItem = async () => {
//     if (!input.trim()) return;
//     try {
//       await axios.post(API_URL, { title: input });
//       fetchItems(); // Refresh list
//       setInput("");
//     } catch (err) {
//       console.error("Add error:", err);
//     }
//   };

//   const updateItem = async () => {
//     if (!input.trim() || !editId) return;
//     try {
//       await axios.put(`${API_URL}/${editId}`, { title: input });
//       fetchItems();
//       setEditId(null);
//       setInput("");
//     } catch (err) {
//       console.error("Update error:", err);
//     }
//   };

//   const deleteItem = async (id) => {
//     try {
//       await axios.delete(`${API_URL}/${id}`);
//       fetchItems();
//     } catch (err) {
//       console.error("Delete error:", err);
//     }
//   };

//   const editItem = (item) => {
//     setEditId(item.id);
//     setInput(item.title);
//   };

//   return (
//     <div>
//       <h2>Simple CRUD with Axios</h2>
//       <input
//         type="text"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         placeholder="Enter item"
//       />
//       {editId ? (
//         <button onClick={updateItem}>Update</button>
//       ) : (
//         <button onClick={addItem}>Add</button>
//       )}
//       <ul>
//         {items.map((item) => (
//           <li key={item.id}>
//             <span>{item.title}</span>
//             <button onClick={() => editItem(item)}>Edit</button>
//             <button onClick={() => deleteItem(item.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// --------------------------

// simple'
import React, { useState } from "react";

function Apple() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);

  const addItem = () => {
    if (!input.trim()) return;
    setItems([
      ...items,
      {
        id: Date.now(),
        title: input,
      },
    ]);
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const editItem = (item) => {
    setEditId(item.id);
    setInput(item.title);
  };

  const updateItem = () => {
    if (!input.trim() || editId === null) return;
    setItems(
      items.map((item) =>
        item.id === editId ? { ...item, title: input } : item
      )
    );
    setEditId(null);
    setInput("");
  };
  return (
    <div>
      <h1>crud</h1>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        {editId ? (
          <button onClick={updateItem}>Update</button>
        ) : (
          <button onClick={addItem}>add</button>
        )}
      </div>

      <ul>
        {items.map((item) => (
          <li>
            <span>{item.title}</span>
            <button onClick={() => editItem(item)}>edit</button>
            <button onClick={() => deleteItem(item.id)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Apple;
