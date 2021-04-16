import React from "react";

export interface Props {
  specialName: string;
  special: any;
  theme: boolean;
}

export default function DetailSpecial({ special, specialName, theme }: Props) {
  return (
    <div className={`detail-special ${theme ? "--dark" : ""}`}>
      {special.length > 3 ? (
        <>
          <strong>{specialName}</strong>
          <span>{special}</span>
        </>
      ) : special?.character1 ? (
        <>
          <strong>{specialName}</strong>
          <span>
            <strong>Character 1: </strong>
            {special.character1}
          </span>
          <span>
            <strong>Character 1: </strong>
            {special.character2}
          </span>
        </>
      ) : (
        <>
          <strong>{specialName}</strong>
          <span>{special[0].description}</span>
          <span>{special[1].description}</span>
        </>
      )}
    </div>
  );
}
