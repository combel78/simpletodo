import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const StartPage = () => {
  return (
    <section id="main_area" className="main style2">
      <motion.div
        className="container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        <motion.span
          initial={{ x: 40, y: -120 }}
          animate={{ x: 0, y: 0 }}
          transition={{
            delay: 0.8,
            duration: 2.4,
            type: "spring",
            stiffness: 80,
          }}
          className="icon solid major fa-check-square"
        ></motion.span>
        <h1>
          Hi, das ist{" "}
          <motion.strong
            animate={{ color: "#57aed3" }}
            transition={{ delay: 0.6, duration: 2 }}
          >
            Simple TODO
          </motion.strong>
          , ein kleines Tool, <br />
          welches Dich unterstützt, <br />
          Deine täglichen Aufgaben zu meistern.
        </h1>
        <p>
          Bitte klicke auf <strong>Liste</strong>, um Deine Aufgabenliste zu
          sehen. Klicke auf <strong>Neu</strong>, um eine neue Aufgabe zu
          erstellen!
        </p>
        <ul className="actions special">
          <motion.li
            whileHover={{
              scale: 1.2,
              textShadow: "0px 0px 6px rgb(255, 255, 255)",
            }}
            transition={{ duration: 0.3 }}
          >
            <Link to="/list" className="button">
              Liste
            </Link>
          </motion.li>
          <motion.li
            whileHover={{
              scale: 1.2,
              textShadow: "0px 0px 6px rgb(255, 255, 255)",
            }}
            transition={{ duration: 0.3 }}
          >
            <Link to="/new" className="button">
              Neu
            </Link>
          </motion.li>
        </ul>
      </motion.div>
    </section>
  );
};

export default StartPage;
