import SearchBox from "../SearchBox/SearchBox";
import NavbarItems from "./NavbarItems";
import { CiPizza } from "react-icons/ci";
import UserButton from "../User/UserButton";
import ShoppingCardButton from "../ShoppingCard/ShoppingCardButton";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <span className="navbar-brand">
          <CiPizza fontSize={"2rem"} />
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <NavbarItems />
          <SearchBox />
          <div className="navbar-btn d-flex align-items-center gap-3">
            <UserButton />
            <ShoppingCardButton />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
