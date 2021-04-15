import React, { useEffect } from "react";
import "../../styles/CharacterDetail.scss";

import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  loadOneCharacter,
  loadCharacterDetail,
  loadAllCharacters,
} from "../../redux/actions/charactersActions";

import {
  characterInterface,
  characterDetail,
} from "../../interfaces/charsInterface";

import padNumber from "../../utils/padNumber";
import urls from "../../constants/dbUrls";

import DetailLB from "./DetailLB";
import DetailSailor from "./DetailSailor";
import DetailPotential from "./DetailPotential";
import DetailSupport from "./DetailSupport";
import DetailStats from "./DetailStats";
import DetailSpecial from "./DetailSpecial";
import DetailCaptain from "./DetailCaptain";

interface Props {
  character: characterInterface;
  charDetail: characterDetail;
  characters: characterInterface[];
  actions: {
    loadOneCharacter: Function;
    loadCharacterDetail: Function;
    loadAllCharacters: Function;
  };
  filters: any;
}

export function CharacterDetail({
  actions,
  character,
  charDetail,
  characters,
}: Props) {
  const { charId } = useParams<{ charId: string }>();

  useEffect(() => {
    if (!characters.length) {
      actions.loadAllCharacters();
    }
  }, [actions, characters]);

  useEffect(() => {
    actions.loadOneCharacter(+charId);
    actions.loadCharacterDetail(+charId);
  }, [actions, charId]);

  return (
    character && (
      <article className="chardetail">
        <div className="chardetail__main">
          <img
            className="chardetail__main-top"
            src={`${urls.detailImg}${padNumber(+character.id)}.png`}
            alt={`${character.name}`}
          ></img>
          <div className="chardetail__main-bottom">
            <div className="chardetail__main-classes">
              {character.class && character?.class?.length === 2 ? (
                <>
                  <img src={`images/${character?.class[0]}.png`} alt="class" />
                  <img src={`images/${character?.class[1]}.png`} alt="class" />
                </>
              ) : character?.class?.length === 3 ? (
                <>
                  <img
                    src={`images/${character?.class[0][0]}.png`}
                    alt={`${character?.class[0][0]}`}
                  />
                  <img
                    src={`images/${character?.class[0][1]}.png`}
                    alt={`${character?.class[0][1]}`}
                  />
                </>
              ) : character?.class === "Booster" ? (
                <img src={`images/evolver.png`} alt="Booster" />
              ) : (
                <img src={`images/${character?.class}.png`} alt="class" />
              )}
            </div>

            <div className="chardetail__main-name">
              <span
                className={`detail-name ${
                  character?.type?.length !== 2
                    ? character.type!
                    : character.type[0]
                }color`}
              >
                {character.name}
              </span>
              <span className="detail-alias">{character.alias}</span>
            </div>
          </div>
        </div>
        <DetailStats character={character} />
        {charDetail ? (
          <>
            <div className="chardetail__column">
              <div className="chardetail__column-left">
                <div className="detail-captain">
                  <strong>Captain ability</strong>
                  {charDetail?.captain && (
                    <DetailCaptain captain={charDetail.captain} />
                  )}
                </div>
                {charDetail.sailor && (
                  <DetailSailor sailor={charDetail.sailor} />
                )}
              </div>
              <div className="chardetail__column-right">
                {charDetail.special && (
                  <DetailSpecial
                    special={charDetail.special}
                    specialName={charDetail.specialName}
                  />
                )}
              </div>
            </div>
            {charDetail.limit && (
              <div className="chardetail__lb">
                <DetailLB lb={charDetail.limit} />
              </div>
            )}
            {charDetail.potential && (
              <div className="chardetail__potential">
                <DetailPotential potential={charDetail.potential} />
              </div>
            )}
            {charDetail.support && (
              <div className="chardetail__support">
                <DetailSupport support={charDetail.support} />
              </div>
            )}
          </>
        ) : (
          ""
        )}
      </article>
    )
  );
}

export function mapStateToProps(state) {
  return {
    character: state.charactersReducer.character,
    characters: state.charactersReducer.characters,
    charDetail: state.charactersReducer.charDetail,
  };
}
export function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        loadOneCharacter,
        loadCharacterDetail,
        loadAllCharacters,
      },
      dispatch
    ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterDetail);
