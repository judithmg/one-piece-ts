import React from "react";
import Main from "./Main";
import CharacterDetail from "./CharacterDetail";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/App.scss";

AOS.init();

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:charId" component={CharacterDetail} />
        <Route path="/" component={Main} />
      </Switch>
    </Router>
  );
}

export default App;
