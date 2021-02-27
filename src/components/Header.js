import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { componentContainerVariant, navMenuChildVariant } from "../motion";

const Header = () => {
  return (
    <section id="header_area" className="main style2">
      <div className="container">
        <hr />
      </div>
      <div className="row aln-center">
        <motion.ul
          variants={componentContainerVariant}
          initial="init"
          animate="animation"
          className="headerNav"
        >
          <motion.li
            variants={navMenuChildVariant}
            whileHover={navMenuChildVariant.hover}
            whileTap={navMenuChildVariant.tap}
          >
            <Link to="/">Start</Link>
          </motion.li>
          <motion.li
            variants={navMenuChildVariant}
            whileHover={navMenuChildVariant.hover}
            whileTap={navMenuChildVariant.tap}
          >
            <Link to="/list">Liste</Link>
          </motion.li>
          <motion.li
            variants={navMenuChildVariant}
            whileHover={navMenuChildVariant.hover}
            whileTap={navMenuChildVariant.tap}
          >
            <Link to="/new">Neu</Link>
          </motion.li>
        </motion.ul>
      </div>
    </section>
  );
};

export default Header;
