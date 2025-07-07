import { useApp } from "../Provider/AppProvider";
import "./search.css";

const SearchBox = () => {
  const { searchTrem, setSearchTerm } = useApp();

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="me-5">
      <input
        className="form-control me-5 search-box"
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={searchTrem}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBox;
