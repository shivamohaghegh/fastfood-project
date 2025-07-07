const NavbarError = ({ onRetry }) => {
  return (
    <div
      className="bg-danger-subtle text-danger-emphasis p-2 px-3 rounded d-flex justify-content-between align-items-center small shadow-sm"
      style={{ maxWidth: "100%" }}
      role="alert"
    >
      <span>
        Unable to load categories. Please check your connection and try again.
      </span>
      <button className="btn btn-sm btn-outline-danger ms-3" onClick={onRetry}>
        Retry
      </button>
    </div>
  );
};

export default NavbarError;
