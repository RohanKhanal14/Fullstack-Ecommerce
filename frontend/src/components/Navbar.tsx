import React from "react";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaShoppingBag,
  FaSignInAlt,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="header">
      <Link to={"/"}>HOME</Link>
      <Link to={"/search"}>
        <FaSearch />
      </Link>
      <Link to={"/cart"}>
        <FaShoppingBag />
      </Link>
      <Link to={"/login"}>
        <FaSignInAlt />
      </Link>
    </nav>
  );
};

export default Navbar;
