import SortingButton from "../Sorting/SortingButton";
import ItemLimitation from "../ItemLimitation/ItemLimitation";
import FoodCard from "./FoodCard";
import Pagination from "../Pagination/Pagination";
import useFetchFoodData from "../../Hooks/FetchHooks/useFetchFoodData";
import Loading from "../Loading/Loading";
import FoodListError from "../Error/FoodListError";
import "./foodList.css";

const FoodList = () => {
  const { foodItems, loading, error, refetch } = useFetchFoodData();

  return (
    <div className="container">
      <div className="d-flex justify-content-between my-5">
        <SortingButton />
        <ItemLimitation />
      </div>
      {loading ? (
        <Loading />
      ) : error ? (
        <FoodListError onRetry={refetch} />
      ) : (
        <FoodCard foods={foodItems} />
      )}
      <Pagination />
    </div>
  );
};

export default FoodList;
