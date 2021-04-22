import React from "react";

export default function DetailLB({ lb, theme }) {
  return (
    <div className={`chardetail__lb ${theme ? "--dark" : ""}`}>
      <ul>
        {lb &&
          lb.map((ability, index) => (
            <li key={Math.random()}>
              <strong>{`Level ${index + 1}: `}</strong>
              {ability.description}
            </li>
          ))}
      </ul>
    </div>
  );
}
