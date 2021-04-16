import React from "react";

export default function DetailPotential({ potential, theme }) {
  return (
    <div className={`chardetail__potential ${theme ? "--dark" : ""}`}>
      {potential &&
        potential.map((ability, index) => (
          <div key={Math.random()}>
            <strong>{`Potential Ability ${index + 1}: ${ability.Name}`}</strong>
            <ul>
              {ability.description.map((el) => (
                <li key={Math.random()}>{el}</li>
              ))}
            </ul>
          </div>
        ))}
    </div>
  );
}
