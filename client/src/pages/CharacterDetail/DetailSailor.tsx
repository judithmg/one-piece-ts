import React from "react";

export default function DetailSailor({ sailor, theme }) {
  return (
    <div className={`detail-sailor ${theme ? "--dark" : ""}`}>
      {sailor?.base && (
        <>
          <strong>Base Sailor Ability</strong>
          <span>{sailor?.base}</span>
        </>
      )}
      {sailor?.level1 && (
        <>
          <strong>Limit Break Sailor Ability 1</strong>
          <span>{sailor?.level1}</span>
        </>
      )}
      {sailor?.level2 && (
        <>
          <strong>Limit Break Sailor Ability 2</strong>
          <span>{sailor?.level2}</span>
        </>
      )}

      {typeof sailor === "string" && (
        <>
          <strong>Base Sailor Ability</strong>
          <span>{sailor}</span>
        </>
      )}
    </div>
  );
}
