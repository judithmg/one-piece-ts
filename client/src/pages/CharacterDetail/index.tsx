import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  loadOneCharacter,
  loadCharacterDetail,
} from "../../redux/actions/charactersActions";

export function CharacterDetail({ actions, character, charDetail }) {
  const { charId } = useParams();

  useEffect(() => {
    actions.loadOneCharacter(+charId);
    actions.loadCharacterDetail(+charId);
  }, [actions, charId]);

  return (
    character && (
      <div>
        <div className="unit-id">{character.id}</div>
        <div className="unit-name">{character.name}</div>
        <div className="unit-type">{character.type}</div>
        <div className="unit-class">{character.class}</div>
        <div className="unit-stars">{character.stars}</div>
        <div className="unit-maxHP">{character.maxHP}</div>
        <div className="unit-maxATK">{character.maxATK}</div>
        <div className="unit-maxRCV">{character.maxRCV}</div>
        <div className="unit-cost">{character.cost}</div>
        <div className="unit-combo">{character.combo}</div>
        <div className="unit-sockets">{character.sockets}</div>
        <div className="unit-maxLvl">{character.maxLvl}</div>
        <div className="unit-expToMax">{character.expToMax}</div>
        <div className="unit-alias">{character.alias}</div>
        <div className="unit-family">{character.family}</div>
        <div className="unit-cooldown">{character.cooldown}</div>
      </div>
    )
  );
}

export function mapStateToProps(state) {
  return {
    character: state.charactersReducer.character,
    charDetail: state.charactersReducer.charDetail,
  };
}
export function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        loadOneCharacter,
        loadCharacterDetail,
      },
      dispatch
    ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterDetail);
