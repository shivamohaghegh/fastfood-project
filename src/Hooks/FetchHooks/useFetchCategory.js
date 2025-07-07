import axios from "axios";
import { useEffect, useState, useCallback } from "react";

const useFetchCategory = () => {
  const [categoryItems, setCategoryItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        "https://6844019c71eb5d1be032236c.mockapi.io/FoodCategory"
      );
      if (response.data) {
        setCategoryItems(response.data);
      } else {
        setCategoryItems([]);
        setError("Something went wrong, hon!");
      }
    } catch (error) {
      setCategoryItems([]);
      setError("We have an error, hon!");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { categoryItems, loading, error, refetch: fetchData };
};

export default useFetchCategory;
