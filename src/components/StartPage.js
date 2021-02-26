import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const StartPage = () => {
  return (
    <section id="main_area" className="main style2">
      <div className="container">
        <span className="icon solid major fa-check-square"></span>
        <motion.h1 animate={{ color: "#FF2994", x: 100, y: -100 }}>
          Hi, das ist Simple TODO!
        </motion.h1>
        <ul className="actions special">
          <li>
            <Link to="/list" className="button">
              Liste
            </Link>
          </li>
          <li>
            <Link to="/new" className="button">
              Neu
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default StartPage;
