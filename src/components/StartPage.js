import React from "react";
import { Link } from "react-router-dom";

const StartPage = () => {
  return (
    <section id="main_area" className="main style2">
      <div className="container">
        <span className="icon solid major fa-check-square"></span>
        <h1>
          Hi, das ist <strong>Simple TODO</strong>, ein kleines Tool, <br />
          welches Dich unterstützt, <br />
          Deine täglichen Aufgaben zu meistern.
        </h1>
        <p>
          Bitte klicke auf <strong>Liste</strong>, um Deine Aufgabenliste zu
          sehen. Klicke auf <strong>Neu</strong>, um eine neue Aufgabe zu
          erstellen!
        </p>
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
