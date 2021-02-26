import React from "react";
import { Link } from "react-router-dom";

const Todo = ({ todo, index, completeTodo, removeTodo }) => {
  return (
    <tr>
      <td style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
        {todo.name}
      </td>
      <td style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
        {todo.description}
      </td>
      <td>
        <ul className="icons">
          <li>
            <a
              href="#check"
              onClick={() => completeTodo(index)}
              className="icon style4 fa-check-circle"
            >
              <span className="label">Erledigt</span>
            </a>
          </li>
          <li>
            <a
              href="#delete"
              onClick={() => removeTodo(index)}
              className="icon style4 fa-trash-alt"
            >
              <span className="label">Löschen</span>
            </a>
          </li>
        </ul>
      </td>
    </tr>
  );
};

const TODOList = ({ todos, completeTodo, removeTodo }) => {
  return (
    <section id="main_area" className="main style2">
      <div className="container">
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
            <li>
              <Link to="/new" className="button">
                Neu
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TODOList;
