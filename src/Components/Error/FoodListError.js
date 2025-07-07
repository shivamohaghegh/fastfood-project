const FoodListError = ({ onRetry }) => {
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center text-center p-4 bg-light rounded shadow-sm"
      style={{ minHeight: "200px" }}
    >
      <p className="text-danger fw-bold mb-3">
        Oops! Something went wrong while loading the food list.
      </p>
      {onRetry && (
        <button className="btn btn-outline-danger btn-sm" onClick={onRetry}>
          Retry
        </button>
      )}
    </div>
  );
};

export default FoodListError;
