import { useApp } from "../Provider/AppProvider";
import "./itemLimitation.css";

const ItemLimitation = () => {
  const { setLimit, limit } = useApp();

  const handleLimit = (value) => {
    setLimit(value);
  };

  const limits = [4, 8, 12, 16, 20];

  return (
    <nav aria-label="Items per page">
      <div className="d-flex align-items-center">
        <span className="me-3">Items per page:</span>
        <div>
          {limits.map((num, idx) => (
            <span
              key={num}
              className={`limit-btn ${limit === num ? "active" : ""} `}
              onClick={() => handleLimit(num)}
            >
              {num}
              {idx < limits.length - 1 && (
                <span className="mx-1" style={{ color: "#fff" }}>
                  /
                </span>
              )}
            </span>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default ItemLimitation;
