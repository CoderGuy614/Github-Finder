import React from "react";
import propTypes from "prop-types";

const Navbar = ({ icon, title }) => {
  return (
    <div>
      <nav className="navbar bg-primary">
        <h1>
          {title} <i className={icon} />
        </h1>
      </nav>
    </div>
  );
};

Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github",
};

Navbar.propTypes = {
  title: propTypes.string.isRequired,
  icon: propTypes.string.isRequired,
};
export default Navbar;
