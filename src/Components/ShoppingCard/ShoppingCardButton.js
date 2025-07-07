import { BiSolidCart } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const ShoppingCardButton = () => {
  return (
    <div className="me-3">
      <NavLink to="/card">
        <BiSolidCart className="navbar-btns" />
      </NavLink>
    </div>
  );
};

export default ShoppingCardButton;
