import React, { useState, useEffect, useRef } from "react";

function Scroll() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const loader = useRef(null);

  useEffect(() => {
    fetchItems();
  }, [page]);

  const fetchItems = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
      );
      const data = await res.json();
      setItems((prevItems) => [...prevItems, ...data]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPage((prevPage) => prevPage + 1);
        }
      },
      { threshold: 1 }
    );

    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="p-5 max-w-lg mx-auto bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Infinite Scroll</h2>

      {/* Items List */}
      <ul>
        {items.map((item) => (
          <li key={item.id} className="p-3 border-b">
            {item.title}
          </li>
        ))}
      </ul>

      {loading && <p className="text-center text-gray-500 mt-4">Loading...</p>}

      <div ref={loader} className="h-10"></div>
    </div>
  );
}

export default Scroll;
