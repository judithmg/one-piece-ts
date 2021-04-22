import React, { useRef, useState, useEffect } from "react";
import Toggle from "../../components/Toggle";
import "../../styles/CharacterHeader.scss";

export default function CharacterHeader() {
  const [isSticky, setSticky] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const handleScroll = () => {
    if (ref.current) {
      setSticky(ref.current.getBoundingClientRect().top <= 0);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);

  return (
    <div className={`charlist__header${isSticky ? " sticky" : ""}`} ref={ref}>
      <div className="header__left">
        <span className="--mobile">
          <Toggle />
        </span>
      </div>
      <div className="header__right">
        <span className="header__num --desktop">ID</span>
        <span className="header__num --desktop">Max HP</span>
        <span className="header__num --desktop">Max ATK</span>
        <span className="header__num --desktop">Max RCV</span>
        <span className="header__num --desktop">Cost</span>
        <span className="header__stars">Rating</span>
        <span className="header__num">Class</span>
      </div>
    </div>
  );
}
