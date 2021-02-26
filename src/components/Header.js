import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section id="header_area" className="main style2">
      <div className="container">
        <hr />
      </div>
      <div className="row aln-center">
        <ul className="headerNav">
          <li>
            <Link to="/">Start</Link>
          </li>
          <li>
            <Link to="/list">Liste</Link>
          </li>
          <li>
            <Link to="/new">Neu</Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Header;
