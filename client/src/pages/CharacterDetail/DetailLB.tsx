import React from "react";

export default function DetailLB({ lb }) {
  return (
    <ul>
      {lb &&
        lb.map((ability, index) => (
          <li key={Math.random()}>
            <strong>{`Level ${index + 1}: `}</strong>
            {ability.description}
          </li>
        ))}
    </ul>
  );
}
