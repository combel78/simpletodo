import "./App.css";
import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import StartPage from "./components/StartPage.js";
import TODOList from "./components/TODOList.js";
import TODOForm from "./components/TODOForm.js";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  const [todos, setTodos] = React.useState([
    {
      name: "Lerne React",
      description: "Animationen nicht vergessen!",
      isCompleted: false,
    },
    {
      name: "Essen mit Freunden",
      description: "Rezept aussuchen und Einkaufszettel schreiben",
      isCompleted: false,
    },
    {
      name: "Baue eine coole TODO-App",
      description: "auch für mobile Geräte :-)",
      isCompleted: false,
    },
  ]);

  const addTodo = (inputs) => {
    const newTodos = [...todos, inputs];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <React.Fragment>
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route path="/list">
            <TODOList
              todos={todos}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
            />
          </Route>
          <Route path="/new">
            <TODOForm addTodo={addTodo} />
          </Route>
          <Route path="/">
            <StartPage />
          </Route>
        </Switch>
      </AnimatePresence>
      <Footer />
    </React.Fragment>
  );
}

export default App;
