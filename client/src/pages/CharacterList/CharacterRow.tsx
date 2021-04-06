import React from "react";
import getThumbnailUrl from "../../utils/getThumbnailUrl";
import { Link } from "react-router-dom";
import StarRatings from "./StarRatings";
import "../../styles/CharacterRow.scss";

export default function CharacterRow({ unit }) {
  return (
    <div className="row__container">
      <div className="row__left">
        <div className="row__img">
          <Link to={`/${unit.id}`}>
            <img src={getThumbnailUrl(unit.id)} alt="unit img" />
          </Link>
        </div>
        <div className="row__names">
          {unit?.type?.length !== 2 && (
            <span className={`${unit.type.toLowerCase()}color unit-name`}>
              {unit.name}
            </span>
          )}
          {unit?.type?.length === 2 && (
            <span className={`${unit.type[0].toLowerCase()}color unit-name`}>
              {unit.name}
            </span>
          )}
          <span className="unit-alias">{unit.alias}</span>
          {unit.class.length === 2 ? (
            <span className="unit-class">
              {unit.class[0]} {unit.class[1]}
            </span>
          ) : (
            <span className="unit-class">{unit.class}</span>
          )}
        </div>
      </div>
      <div className="row__right">
        <div className="row__stats">
          <span className="unit-id"># {unit.id}</span>
          <span className="unit-maxHP">{unit.maxHP}</span>
          <span className="unit-maxATK">{unit.maxATK}</span>
          <span className="unit-maxRCV">{unit.maxRCV}</span>
          <span className="unit-cost">{unit.cost}</span>
          <StarRatings stars={unit.stars} />
        </div>
        <div className="row__class">
          {unit.class && unit?.class?.length === 2 ? (
            <>
              <img
                src={`images/${unit?.class[0].toLowerCase()}.png`}
                alt="class"
              />
              <img
                src={`images/${unit?.class[1].toLowerCase()}.png`}
                alt="class"
              />
            </>
          ) : unit?.class?.length === 3 ? (
            <>
              <img
                src={`images/${unit?.class[0][0].toLowerCase()}.png`}
                alt="class"
              />
              <img
                src={`images/${unit?.class[0][1].toLowerCase()}.png`}
                alt="class"
              />
            </>
          ) : unit.class.toLowerCase() === "booster" ? (
            <img src={`images/evolver.png`} alt="class" />
          ) : (
            <img src={`images/${unit?.class.toLowerCase()}.png`} alt="class" />
          )}
        </div>
      </div>
    </div>
  );
}
