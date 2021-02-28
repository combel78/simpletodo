import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  buttonVariant,
  componentContainerVariant,
  todoListEntryVariant,
  todoListIconVariant,
} from "../motion";

const Todo = ({ todo, index, completeTodo, removeTodo }) => {
  return (
    <tr>
      <motion.td
        variants={todoListEntryVariant}
        whileHover="hover"
        style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      >
        {todo.name}
      </motion.td>
      <motion.td
        variants={todoListEntryVariant}
        whileHover="hover"
        style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      >
        {todo.description}
      </motion.td>
      <td>
        <ul className="icons">
          <motion.li variants={todoListIconVariant} whileHover="hover">
            <a
              href="#check"
              onClick={() => completeTodo(index)}
              className="icon style4 fa-check-circle"
            >
              <span className="label">Erledigt</span>
            </a>
          </motion.li>
          <motion.li variants={todoListIconVariant} whileHover="hover">
            <a
              href="#delete"
              onClick={() => removeTodo(index)}
              className="icon style4 fa-trash-alt"
            >
              <span className="label">Löschen</span>
            </a>
          </motion.li>
        </ul>
      </td>
    </tr>
  );
};

const TODOList = ({ todos, completeTodo, removeTodo }) => {
  return (
    <section id="main_area" className="main style2">
      <motion.div
        variants={componentContainerVariant}
        initial="init"
        animate="animation"
        exit="exit"
        className="container"
      >
        <div className="row">
          <span className="icon style4 major fa-check-square"></span>
          <h2>Deine Liste</h2>
        </div>
        <div className="table-wrapper">
          <table className="alt">
            <thead>
              <tr>
                <th>Name</th>
                <th>Beschreibung</th>
                <th>Bearbeiten</th>
              </tr>
            </thead>
            <tbody>
              {todos.map((todo, index) => (
                <Todo
                  key={index}
                  index={index}
                  todo={todo}
                  completeTodo={completeTodo}
                  removeTodo={removeTodo}
                />
              ))}
            </tbody>
          </table>
          <ul className="actions special">
            <motion.li variants={buttonVariant} whileHover="buttonAnimation">
              <Link to="/new" className="button">
                Neu
              </Link>
            </motion.li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default TODOList;
