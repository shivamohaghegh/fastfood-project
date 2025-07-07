import { useLocation, useNavigate } from "react-router-dom";
import useFetchCategory from "../../Hooks/FetchHooks/useFetchCategory";
import { useApp } from "../Provider/AppProvider";
import Loading from "../Loading/Loading";
import NavbarError from "../Error/NavbarError";

const NavbarItems = () => {
  const { categoryItems, loading, error, refetch } = useFetchCategory();
  const { categoryValue, setCategoryValue, setPage } = useApp();
  const navigate = useNavigate();
  const location = useLocation();

  const handleCategory = (e) => {
    e.preventDefault();
    setCategoryValue(e.currentTarget.dataset.category);
    setPage(1);
    if (location.path !== "/product") {
      navigate("/product");
    }
  };

  return (
    <div className="container ms-3">
      {loading ? (
        <Loading />
      ) : error ? (
         <NavbarError onRetry={refetch} />
      ) : (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <button
              className={`nav-link ${categoryValue === "All" ? "active" : ""}`}
              data-category="All"
              onClick={handleCategory}
            >
              All
            </button>
          </li>
          {categoryItems?.map((category) => (
            <li
              className={`nav-item ${
                categoryValue === category.name ? "active" : ""
              }`}
              key={category.id}
            >
              <button
                className="nav-link"
                data-category={category.name}
                onClick={handleCategory}
              >
                {category.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavbarItems;
