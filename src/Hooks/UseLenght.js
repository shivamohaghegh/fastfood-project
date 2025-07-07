import { useEffect } from "react";
import { useApp } from "../Components/Provider/AppProvider";
import axios from "axios";

const useLength = () => {
  const { foodLength, setFoodLength, limit, categoryValue, searchTerm } =
    useApp();
  const params = new URLSearchParams();

  useEffect(() => {
    const baseUrl = "https://6844019c71eb5d1be032236c.mockapi.io/FoodList";

    if (categoryValue !== "" && categoryValue !== "All") {
      params.append("category", categoryValue);
    }
    if (searchTerm !== "") {
      params.append("search", searchTerm);
    }

    const finalUrl = `${baseUrl}?${params.toString()}`;

    const fetchData = async () => {
      try {
        const response = await axios.get(finalUrl);
        if (Array.isArray(response.data)) {
          setFoodLength(response.data.length);
        } else {
          console.warn("Something is not working well, honey!");
        }
      } catch (error) {
        console.error("We have an error, honey!");
      }
    };
    fetchData();
  }, [categoryValue, searchTerm]);

  const totalPages = foodLength !== 0 ? Math.ceil(foodLength / limit) : 0;

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return pageNumbers;
};

export default useLength;
