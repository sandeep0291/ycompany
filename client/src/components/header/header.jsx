import "./header.scss";
import { fetchProductsByName, clearProductList } from "../../state-management/slices/productSlice";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { debounce } from "../../utils/utils";
import Logo from '../../assets/logo.png';
import { useEffect, useState } from "react";

const Header = function () {
  const dispatch = useDispatch();
  const location = useLocation().pathname;
  const [navActive, setNavActive] = useState({
    home: false,
    cart: false
  }) 

  useEffect(()=>{
    if(location === "/home" || location === "/"){
      setNavActive({home: true, cart: false})
    }else{
      setNavActive({home: false, cart: true})
    }
  },[location])

  const handleSearchChange = debounce((e) => {
    dispatch(clearProductList());
    dispatch(fetchProductsByName(e.target.value));
    e.target.value = "";
  }, 1000);


  const renderSearch = ()=>{
    return (
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
    )
  }

  return (
    <header>
      {location !== "/home" && location !== "/" ? null : renderSearch() }
      {/* display on mobile devices */}
      <img id="logo" src={Logo} alt="logo" />
      <div id="rightNavigation" className="d-none d-sm-block">
        <Link to="/home">
          <button type="button" className={`btn btn-outline-warning btn-md ${navActive.home ? 'active' : ''}`}>
            <i className="bi bi-house-door"></i>&nbsp; Home
          </button>
        </Link>
        &nbsp;&nbsp;
        <Link to="/cart">
          <button type="button" className={`btn btn-outline-warning btn-md ${navActive.cart ? 'active' : ''}`}>
            <i className="bi bi-cart"></i>&nbsp; Cart
          </button>
        </Link>
      </div>
      {/* display on mobile devices */}
      <div id="rightNavigation" className="d-md-none d-sm-none">
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
