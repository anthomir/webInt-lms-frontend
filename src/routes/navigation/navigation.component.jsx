import { Link, Outlet } from "react-router-dom";
import { Fragment } from "react";

import { ReactComponent as Logo } from "../../assets/icons/header-logo.svg";
import { ReactComponent as Courses } from "../../assets/icons/courses.svg";
import { ReactComponent as Tutorials } from "../../assets/icons/tutorials.svg";
import { ReactComponent as LiveStreams } from "../../assets/icons/livestreams.svg";
import { ReactComponent as Search } from "../../assets/icons/search.svg";
import { ReactComponent as Account } from "../../assets/icons/account.svg";
import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <Fragment>
      <header className="header">
        <div className="header__section">
          <Link to="/" className="header__icon">
            <Logo />
          </Link>

          <nav className="header__nav">
            <ul className="header__nav--list">
              <li className="header__nav--item">
                <Link to="/" className="header__nav--link">
                  <Courses />
                  Courses
                </Link>
                <Link to="/" className="header__nav--link">
                  <Tutorials />
                  Tutorials
                </Link>
                <Link to="/" className="header__nav--link">
                  <LiveStreams />
                  Tutorials
                </Link>
                <Link to="/" className="header__nav--link">
                  <Search />
                </Link>
                <Link to="/" className="header__nav--link">
                  <Account />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
