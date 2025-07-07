import { createContext, useContext, useState } from "react";

const AppContext = createContext();
export const useApp = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [foodItems, setFoodItems] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(8);
  const [foodLength, setFoodLength] = useState(0);
  const [sorting, setSorting] = useState({ sortBy: "id", order: "asc" });
  const [categoryValue, setCategoryValue] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const value = {
    foodItems,
    setFoodItems,
    page,
    setPage,
    limit,
    setLimit,
    foodLength,
    setFoodLength,
    sorting,
    setSorting,
    categoryValue,
    setCategoryValue,
    searchTerm,
    setSearchTerm,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
