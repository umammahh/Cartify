import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/Actions/userActions";

const Header = () => {
  const [keyword, setKeyword] = useState();
  const dispatch = useDispatch();
  let history = useHistory();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };
  return (
    <div>
      {/* Top Header */}
      <div className="Announcement ">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center display-none">
              <p>+92 336 8273635</p>
              <p>contact@fasteccomerce.com</p>
            </div>
            <div className=" col-12 col-lg-6 justify-content-center justify-content-lg-end d-flex align-items-center">
              <Link to="">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link to="">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link to="">
                <i className="fab fa-linkedin-in"></i>
              </Link>
              <Link to="">
                <i className="fab fa-youtube"></i>
              </Link>
              <Link to="">
                <i className="fab fa-pinterest-p"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Header */}
      <div className="header">
        <div className="container">
          {/* MOBILE HEADER */}
          <div className="mobile-header">
            <div className="container ">
              <div className="row ">
                <div className="col-6 d-flex align-items-center">
                  <Link className="navbar-brand" to="/">
                    <img alt="logo" src="data:image/png;base64,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" />
                  </Link>
                </div>
                <div className="col-6 d-flex align-items-center justify-content-end Login-Register">
                  {userInfo ? (
                    <div className="btn-group">
                      <button
                        type="button"
                        className="name-button dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i class="fas fa-user"></i>
                      </button>
                      <div className="dropdown-menu">
                        <Link className="dropdown-item" to="/profile">
                          Profile
                        </Link>

                        <Link
                          className="dropdown-item"
                          to="#"
                          onClick={logoutHandler}
                        >
                          Logout
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <div className="btn-group">
                      <button
                        type="button"
                        className="name-button dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i class="fas fa-user"></i>
                      </button>
                      <div className="dropdown-menu">
                        <Link className="dropdown-item" to="/login">
                          Login
                        </Link>

                        <Link className="dropdown-item" to="/register">
                          Register
                        </Link>
                      </div>
                    </div>
                  )}

                  <Link to="/cart" className="cart-mobile-icon">
                    <i className="fas fa-shopping-bag"></i>
                    <span className="badge">{cartItems.length}</span>
                  </Link>
                </div>
                <div className="col-12 d-flex align-items-center">
                  <form onSubmit={submitHandler} className="input-group">
                    <input
                      type="search"
                      className="form-control rounded search"
                      placeholder="Search"
                      onChange={(e) => setKeyword(e.target.value)}
                    />
                    <button type="submit" className="search-button">
                      search
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* PC HEADER */}
          <div className="pc-header">
            <div className="row">
              <div className="col-md-3 col-4 d-flex align-items-center">
                <Link className="navbar-brand" to="/">
                  <img alt="logo" src="data:image/png;base64,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" />
                </Link>
              </div>
              <div className="col-md-6 col-8 d-flex align-items-center">
                <form onSubmit={submitHandler} className="input-group">
                  <input
                    type="search"
                    className="form-control rounded search"
                    placeholder="Search"
                    onChange={(e) => setKeyword(e.target.value)}
                  />
                  <button type="submit" className="search-button">
                    search
                  </button>
                </form>
              </div>
              <div className="col-md-3 d-flex align-items-center justify-content-end Login-Register">
                {userInfo ? (
                  <div className="btn-group">
                    <button
                      type="button"
                      className="name-button dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Hi, {userInfo.name}
                    </button>
                    <div className="dropdown-menu">
                      <Link className="dropdown-item" to="/profile">
                        Profile
                      </Link>

                      <Link
                        className="dropdown-item"
                        to="#"
                        onClick={logoutHandler}
                      >
                        Logout
                      </Link>
                    </div>
                  </div>
                ) : (
                  <>
                    <Link to="/register">Register</Link>
                    <Link to="/login">Login</Link>
                  </>
                )}

                <Link to="/cart">
                  <i className="fas fa-shopping-bag"></i>
                  <span className="badge">{cartItems.length}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
