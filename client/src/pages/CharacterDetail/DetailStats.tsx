import React from "react";
import StarRatings from "../../components/StarRatings";
import { characterInterface } from "../../interfaces/charsInterface";
interface Props {
  character: characterInterface;
  theme: boolean;
}

export default function DetailStats({ character, theme }: Props) {
  return (
    character && (
      <div className={`chardetail__stats ${theme ? "--dark" : ""}`}>
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
