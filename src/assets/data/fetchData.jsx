import { useState, useEffect } from "react";

export const useFetchData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();

    async function fetchData() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }
  }, []);

  return data, loading;
};
