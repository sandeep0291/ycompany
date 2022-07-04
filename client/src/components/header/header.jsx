import "./header.scss";
import { fetchProductsByName } from "../../state-management/slices/productSlice";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { debounce } from "../../utils/utils";
import { useEffect, useState } from "react";

const Header = function () {
  const dispatch = useDispatch();
  const location = useLocation().pathname;

  const handleSearchChange = debounce((e) => {
    dispatch(fetchProductsByName(e.target.value));
  }, 500);

  return (
    <header>
      {location !== "/home" ? null : (
        <div className="search-input">
          <div className="input-group input-group-md input">
            <input
              type="text"
              placeholder="Search products here.."
              className="form-control search"
              onChange={handleSearchChange}
            />
            <span className="input-group-text" id="basic-addon1">
              <i className="bi bi-search blue"></i>
            </span>
          </div>
        </div>
      )}

      <div id="rightNavigation" className="d-none d-sm-block">
        <Link to="/home">
          <button type="button" className="btn btn-outline-warning btn-md">
            <i className="bi bi-house-door"></i>&nbsp; Home
          </button>
        </Link>
        &nbsp;&nbsp;
        <Link to="/cart">
          <button type="button" className="btn btn-outline-warning btn-md">
            <i className="bi bi-cart"></i>&nbsp; Cart
          </button>
        </Link>
      </div>

      <div id="rightNavigation" className="d-md-none">
        <Link to="/home">
          <i className="bi bi-house-door yellow"></i>
        </Link>
        &nbsp;&nbsp;
        <Link to="/cart">
          <i className="bi bi-cart yellow"></i>
        </Link>
      </div>
    </header>
  );
};

export default Header;