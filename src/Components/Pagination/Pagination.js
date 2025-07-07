import { useApp } from "../Provider/AppProvider";
import useLength from "../../Hooks/UseLenght";

const Pagination = () => {
  const { page, setPage } = useApp();
  const pageNumbers = useLength();

  const handlePage = (e) => {
    setPage(Number(e.target.value));
  };

  const goPrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const goNext = () => {
    if (page < pageNumbers.length) setPage(page + 1);
  };

  return (
    <div className="d-flex justify-content-center mt-5">
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <button
              className="page-link"
              onClick={goPrev}
              aria-label="Previous"
            >
              <span aria-hidden="true">«</span>
            </button>
          </li>
          {pageNumbers?.map((number) => (
            <li
              className={`page-item ${page === number ? "active" : ""}`}
              key={number}
            >
              <button className="page-link" value={number} onClick={handlePage}>
                {number}
              </button>
            </li>
          ))}

          <li className="page-item">
            <button className="page-link" onClick={goNext} aria-label="Next">
              <span aria-hidden="true">»</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Pagination;
