import React, { useContext, useEffect } from "react";
import "../../styles/CharacterDetail.scss";

import { Link, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  loadOneCharacter,
  loadCharacterDetail,
  loadAllCharacters,
  isOneCharLoading,
} from "../../redux/actions/charactersActions";
import BeatLoader from "react-spinners/BeatLoader";

import Toggle from "../../components/Toggle";
import {
  characterInterface,
  characterDetail,
} from "../../interfaces/charsInterface";

import padNumber from "../../utils/padNumber";
import { dbUrls, imgUrls } from "../../constants";

import DetailLB from "./DetailLB";
import DetailSailor from "./DetailSailor";
import DetailPotential from "./DetailPotential";
import DetailSupport from "./DetailSupport";
import DetailStats from "./DetailStats";
import DetailSpecial from "./DetailSpecial";
import DetailCaptain from "./DetailCaptain";
import { ThemeContext } from "../../components/ThemeProvider";
interface Props {
  character: characterInterface;
  charDetail: characterDetail;
  characters: characterInterface[];
  actions: {
    loadOneCharacter: Function;
    loadCharacterDetail: Function;
    loadAllCharacters: Function;
    isOneCharLoading: Function;
  };
  loadingOneChar: boolean;
}

export function CharacterDetail({
  actions,
  character,
  charDetail,
  loadingOneChar,
  characters,
}: Props) {
  const { charId } = useParams<{ charId: string }>();

  useEffect(() => {
    if (!characters.length) {
      actions.loadAllCharacters();
    }
  }, [actions, characters]);

  useEffect(() => {
    actions.isOneCharLoading();
    actions.loadOneCharacter(+charId);
    actions.loadCharacterDetail(+charId);
  }, [actions, charId]);
  const { theme } = useContext(ThemeContext);
  return (
    character && (
      <>
        <article className="chardetail__side" data-aos="fade-in">
          <div className="chardetail__top">
            <div className="back-btn">
              <Link to="/">
                <img src={imgUrls.back} alt="back-btn" />
              </Link>
            </div>
            <Toggle />
          </div>
          <div className="chardetail__imgs">
            <img
              src={imgUrls.units}
              alt="logo"
              className="filter-chars_img"
            ></img>
          </div>
        </article>
        <article className="chardetail" data-aos="fade-in">
          <div className={`chardetail__main ${theme ? "--dark" : ""}`}>
            <img
              className="chardetail__main-top"
              src={`${dbUrls.detailImg}${padNumber(+character.id)}.png`}
              alt={`${character.name}`}
            ></img>
            <div className="chardetail__main-bottom">
              <div className="chardetail__main-classes">
                {character.class && character?.class?.length === 2 ? (
                  <>
                    <img
                      src={`images/${character?.class[0]}.png`}
                      alt="class"
                    />
                    <img
                      src={`images/${character?.class[1]}.png`}
                      alt="class"
                    />
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
          <DetailStats character={character} theme={theme} />
          {loadingOneChar ? (
            <div className="charlist-spinner">
              <BeatLoader color={"teal"} />
            </div>
          ) : (
            charDetail && (
              <>
                <div className="chardetail__column">
                  <div className="chardetail__column-left">
                    {charDetail?.captain && (
                      <DetailCaptain
                        captain={charDetail.captain}
                        theme={theme}
                      />
                    )}
                    {charDetail.sailor && (
                      <DetailSailor sailor={charDetail.sailor} theme={theme} />
                    )}
                  </div>
                  <div className="chardetail__column-right">
                    {charDetail.special && (
                      <DetailSpecial
                        special={charDetail.special}
                        specialName={charDetail.specialName}
                        theme={theme}
                      />
                    )}
                  </div>
                </div>
                {charDetail.limit && (
                  <DetailLB lb={charDetail.limit} theme={theme} />
                )}
                {charDetail.potential && (
                  <DetailPotential
                    potential={charDetail.potential}
                    theme={theme}
                  />
                )}
                {charDetail.support && (
                  <DetailSupport support={charDetail.support} theme={theme} />
                )}
              </>
            )
          )}
        </article>
      </>
    )
  );
}

export function mapStateToProps(state) {
  return {
    character: state.charactersReducer.character,
    characters: state.charactersReducer.characters,
    charDetail: state.charactersReducer.charDetail,
    loadingOneChar: state.charactersReducer.loadingOneChar,
  };
}
export function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        loadOneCharacter,
        loadCharacterDetail,
        loadAllCharacters,
        isOneCharLoading,
      },
      dispatch
    ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterDetail);
