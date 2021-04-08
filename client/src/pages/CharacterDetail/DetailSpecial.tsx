import React from "react";

export interface specialInterface {
  specialName: string;
  special: any;
}

export default function DetailSpecial({
  special,
  specialName,
}: specialInterface) {
  return (
    <div className="detail-special">
      {special.description ? (
        <>
          <strong>{specialName}</strong>
          <span>{special?.description}</span>
        </>
      ) : special.length > 3 ? (
        <>
          <strong>{specialName}</strong>
          <span>{special}</span>
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
