import React from "react";
import getThumbnailUrl from "../../utils/getThumbnailUrl";
import { Link } from "react-router-dom";

export default function CharacterList({ unit }) {
  return (
    <Link to={`/${unit.id}`}>
      <div>
        <div className="unit-img">
          <img src={getThumbnailUrl(unit.id)} alt="unit img" />
        </div>
        <div className="unit-id">{unit.id}</div>
        <div className="unit-name">{unit.name}</div>
        <div className="unit-type">{unit.type}</div>
        <div className="unit-class">{unit.class}</div>
        <div className="unit-stars">{unit.stars}</div>
        <div className="unit-maxHP">{unit.maxHP}</div>
        <div className="unit-maxATK">{unit.maxATK}</div>
        <div className="unit-maxRCV">{unit.maxRCV}</div>
      </div>
    </Link>
  );
}
