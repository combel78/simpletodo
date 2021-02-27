import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import { buttonVariant, componentContainerVariant } from "../motion";

const TODOForm = ({ addTodo }) => {
  const history = useHistory();

  const [inputs, setInputs] = React.useState({ name: "", description: "" });

  function handleInputChange(event) {
    event.preventDefault();
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  }

  const handleSave = (event) => {
    event.preventDefault();
    addTodo(inputs);
    history.push("/list");
  };

  return (
    <section id="main_area" className="main style2">
      <motion.div
        variants={componentContainerVariant}
        initial="init"
        animate="animation"
        className="container"
      >
        <div className="row">
          <h4>Neues TODO</h4>
        </div>
        <form onSubmit={handleSave}>
          <div className="row">
            <div className="col-8 col-12-xsmall">
              <input
                type="text"
                name="name"
                id="name"
                value={inputs.name}
                placeholder="Neues TODO"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="row" id="topSpace">
            <div className="col-8 col-12-xsmall">
              <textarea
                name="description"
                id="description"
                placeholder="Beschreibung"
                rows="4"
                value={inputs.description}
                onChange={handleInputChange}
              ></textarea>
            </div>
          </div>
          <ul className="actions" id="topSpace">
            <motion.li variants={buttonVariant} whileHover="buttonAnimation">
              <input type="submit" className="button" value="Speichern" />
            </motion.li>
          </ul>
        </form>
        <ul className="actions special">
          <motion.li variants={buttonVariant} whileHover="buttonAnimation">
            <Link to="/list" className="button">
              Zurück
            </Link>
          </motion.li>
        </ul>
      </motion.div>
    </section>
  );
};

export default TODOForm;
