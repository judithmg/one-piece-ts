import React from "react";
import StarRatings from "../../components/StarRatings";

export default function DetailStats({ character }) {
  return (
    character && (
      <div className="chardetail__stats">
        <div className="detail-stats">
          <strong>Combo </strong>
          {character.combo}
        </div>
        <div className="detail-stats">
          <strong>Sockets </strong>
          {character.sockets}
        </div>
        <div className="detail-stats">
          <strong>MaxHP </strong>
          {character.maxHP}
        </div>
        <div className="detail-stats">
          <strong>MaxATK </strong>
          {character.maxATK}
        </div>
        <div className="detail-stats">
          <strong>MaxRCV </strong>
          {character.maxRCV}
        </div>
        <div className="detail-stats">
          <strong>MaxLvl </strong>
          {character.maxLvl}
        </div>
        <div className="detail-stats">
          <strong>EXP To Max </strong>
          {character.expToMax}
        </div>
        <div className="detail-stats">
          <strong>EXP To Max </strong>
          {character.expToMax}
        </div>
        <div className="detail-stats">
          <strong>EXP To Max </strong>
          {character.expToMax}
        </div>
        <div className="detail-stars">
          <strong>Stars </strong>
          {character?.stars && <StarRatings stars={character?.stars} />}
        </div>
      </div>
    )
  );
}
