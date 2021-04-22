import React, { useEffect } from "react";
import Main from "./Main";
import CharacterDetail from "./CharacterDetail";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/App.scss";
import { characterInterface } from "../interfaces/charsInterface";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  loadAllCharacters,
  areCharactersLoading,
} from "../redux/actions/charactersActions";

interface Props {
  characters: characterInterface[];
  actions: {
    areCharactersLoading: Function;
    loadAllCharacters: Function;
  };
  loadingCharacters: boolean;
}

AOS.init();

function App({ actions, characters }: Props) {
  useEffect(() => {
    if (!characters.length) {
      actions.loadAllCharacters();
      actions.areCharactersLoading();
    }
  }, [actions, characters]);
  return (
    <Router>
      <Switch>
        <Route path="/:charId" component={CharacterDetail} />
        <Route path="/" component={Main} />
      </Switch>
    </Router>
  );
}

export function mapStateToProps(state: any) {
  return {
    characters: state.charactersReducer.characters,
    loadingCharacters: state.charactersReducer.loadingCharacters,
  };
}

export function mapDispatchToProps(dispatch: any) {
  return {
    actions: bindActionCreators(
      {
        loadAllCharacters,
        areCharactersLoading,
      },
      dispatch
    ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
