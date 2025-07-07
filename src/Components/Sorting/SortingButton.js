import { GoSortAsc, GoSortDesc } from "react-icons/go";
import { useApp } from "../Provider/AppProvider";
import "./sorting.css";

const SortingButton = () => {
  const { sorting, setSorting } = useApp();

  const handleSortByDefault = () => {
    setSorting({
      sortBy: "id",
      order:
        sorting.sortBy === "id"
          ? sorting.order === "asc"
            ? "desc"
            : "asc"
          : "asc",
    });
  };

  const handleSortByPrice = () => {
    setSorting({
      sortBy: "price",
      order:
        sorting.sortBy === "price"
          ? sorting.order === "asc"
            ? "desc"
            : "asc"
          : "asc",
    });
  };
  const handleSortByAlphabet = () => {
    setSorting({
      sortBy: "name",
      order:
        sorting.sortBy === "name"
          ? sorting.order === "asc"
            ? "desc"
            : "asc"
          : "asc",
    });
  };

  return (
    <div className="d-flex">
      <div onClick={handleSortByDefault} className="sorting-btn">
        <span>Default </span>
        {sorting.sortBy === "id" ? (
          sorting.order === "asc" ? (
            <GoSortDesc />
          ) : (
            <GoSortAsc />
          )
        ) : (
          ""
        )}
      </div>
      <div onClick={handleSortByPrice} className="sorting-btn">
        <span>Price </span>
        {sorting.sortBy === "price" ? (
          sorting.order === "asc" ? (
            <GoSortDesc />
          ) : (
            <GoSortAsc />
          )
        ) : (
          ""
        )}
      </div>
      <div onClick={handleSortByAlphabet} className="sorting-btn">
        <span>Alphabet </span>
        {sorting.sortBy === "name" ? (
          sorting.order === "asc" ? (
            <GoSortDesc />
          ) : (
            <GoSortAsc />
          )
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default SortingButton;
