import { BiSolidCart } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const ShoppingCartButton = () => {
  return (
    <div className="me-3">
      <NavLink to="/cart">
        <BiSolidCart className="navbar-btns" />
      </NavLink>
    </div>
  );
};

export default ShoppingCartButton;
