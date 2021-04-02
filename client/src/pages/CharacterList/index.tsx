import React from "react";
import data from "../../data/modifiedUnits.json";
import getThumbnailUrl from "../../utils/getThumbnailUrl";

export default function CharacterList() {
  const unit = data[0];
  console.log(getThumbnailUrl(unit.id + 1));
  console.log(unit.id);
  return (
    <div>
      <div className="unit-img">
        <img src={getThumbnailUrl(unit.id + 1)} alt="unit img" />
      </div>
      <div className="unit-id">{unit.id + 1}</div>
      <div className="unit-name">{unit.name}</div>
      <div className="unit-type">{unit.type}</div>
      <div className="unit-class">{unit.class}</div>
      <div className="unit-stars">{unit.stars}</div>
      <div className="unit-maxHP">{unit.maxHP}</div>
      <div className="unit-maxATK">{unit.maxATK}</div>
      <div className="unit-maxRCV">{unit.maxRCV}</div>
    </div>
  );
}
