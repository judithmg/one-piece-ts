import React from "react";

export default function DetailSupport({ support }) {
  return (
    <>
      <li key={Math.random()}>
        <strong>Supported Characters: </strong>
        {support[0].Characters}
      </li>
      <ul>
        {support[0].description.map((el, index) => (
          <li key={Math.random()}>
            <strong>{`Level ${index + 1}: `}</strong>
            {el}
          </li>
        ))}
      </ul>
    </>
  );
}
