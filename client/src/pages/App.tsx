import React from "react";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:charId" component={CharacterDetail}></Route>
        <Route path="/" component={CharacterList}></Route>
      </Switch>
    </Router>
  );
}

export default App;
