import React from "react";
import Main from "./Main";
import CharacterDetail from "./CharacterDetail";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import "../styles/App.scss";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:charId" component={CharacterDetail}></Route>
        <Route path="/" component={Main}></Route>
      </Switch>
    </Router>
  );
}

export default App;
