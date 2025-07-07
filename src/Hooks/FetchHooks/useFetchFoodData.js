import { useCallback, useEffect, useState } from "react";
import { useApp } from "../../Components/Provider/AppProvider";
import axios from "axios";

const useFetchFoodData = () => {
  const {
    foodItems,
    setFoodItems,
    page,
    limit,
    sorting,
    categoryValue,
    searchTerm,
  } = useApp();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchFoodData = useCallback(async () => {
    setLoading(true);
    setError(null);
    const baseUrl = "https://6844019c71eb5d1be032236c.mockapi.io/FoodList";
    const params = new URLSearchParams();

    if (searchTerm !== "") {
      params.append("search", searchTerm);
    } else if (categoryValue !== "" && categoryValue !== "All") {
      params.append("category", categoryValue);
    }

    params.append("page", page);
    params.append("limit", limit);
    params.append("sortBy", sorting.sortBy);
    params.append("order", sorting.order);

    const finalUrl = `${baseUrl}?${params.toString()}`;
    try {
      const response = await axios.get(finalUrl);
      if (Array.isArray(response.data)) {
        setFoodItems(response.data);
      } else {
        setFoodItems([]);
        setError("Something is not working well, honey!");
      }
    } catch (error) {
      setFoodItems([]);
      setError("We have an error, honey!");
    } finally {
      setLoading(false);
    }
  }, [page, limit, sorting, categoryValue, searchTerm]);

  useEffect(() => {
    fetchFoodData();
  }, [fetchFoodData]);

  return { foodItems, loading, error, refetch: fetchFoodData };
};

export default useFetchFoodData;
