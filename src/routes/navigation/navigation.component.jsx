import { Link, Outlet } from "react-router-dom";
import { Fragment } from "react";
import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <Fragment>
      <header className="header">
        <Link to="/">
          <h1>Home</h1>
        </Link>

        <nav className="header__nav">
          <ul className="header__nav--list">
            {/* <li className="header__nav--item">
              <Link to="/gallery" className="header__nav--link">
                GALLERY
              </Link>
            </li>
            <li className="header__nav--item">
              <Link to="/products" className="header__nav--link">
                PRODUCTS
              </Link>
            </li>
            <li className="header__nav--item">
              <Link to="/sign-in" className="header__nav--link">
                SIGN IN
              </Link>
            </li> */}
          </ul>
        </nav>
      </header>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
