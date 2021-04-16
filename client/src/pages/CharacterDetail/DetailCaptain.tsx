import React from "react";

export default function DetailCaptain({ captain, theme }) {
  return (
    <div className={`detail-captain ${theme ? "--dark" : ""}`}>
      <strong>Captain ability</strong>
      {captain?.base && (
        <>
          <strong>Base captain Ability</strong>
          <span>{captain?.base}</span>
        </>
      )}
      {captain?.level1 && (
        <>
          <strong>Limit Break captain Ability 1</strong>
          <span>{captain?.level1}</span>
        </>
      )}
      {captain?.level2 && (
        <>
          <strong>Limit Break captain Ability 2</strong>
          <span>{captain?.level2}</span>
        </>
      )}

      {typeof captain === "string" && (
        <>
          <strong>Base captain Ability</strong>
          <span>{captain}</span>
        </>
      )}
    </div>
  );
}
