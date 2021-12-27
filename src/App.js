import "./App.css";
import CardForm from "./components/CardForm/CardForm";
import ProdList from "./components/ProdList/ProdList";
import React from "react";
import { Route, Switch } from "react-router-dom";
const App = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <ProdList />
      </Route>

      <Route path="/addproduct">
        <CardForm />
      </Route>
    </Switch>
  );
};

export default App;
