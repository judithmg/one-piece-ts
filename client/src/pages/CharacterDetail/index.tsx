import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loadOneCharacter } from "../../redux/actions/charactersActions";

export function CharacterDetail({ actions, character }) {
  const { charId } = useParams();

  useEffect(() => {
    actions.loadOneCharacter(+charId);
  }, [actions, charId]);

  return character && <div>{character.name}</div>;
}

export function mapStateToProps(state) {
  return {
    character: state.charactersReducer.character,
  };
}
export function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        loadOneCharacter,
      },
      dispatch
    ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterDetail);
