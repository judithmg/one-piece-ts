import React, { useEffect, useState, useRef } from "react";
import ReactPaginate from "react-paginate";
import Character from "./CharacterRow";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  loadAllCharacters,
  loadCharsShown,
  filterCharacters,
} from "../../redux/actions/charactersActions";

import "../../styles/CharacterList.scss";

export function CharacterList({
  actions,
  characters,
  charsShown,
  charactersFiltered,
}) {
  const [pagination, setPagination] = useState(1);
  const charsPerPage = 20;

  useEffect(() => {
    actions.loadCharsShown(pagination, charsPerPage);
  }, [actions, charactersFiltered, pagination]);

  useEffect(() => {
    if (!characters?.length) {
      actions.loadAllCharacters();
    }
  }, [actions, characters]);

  const [isSticky, setSticky] = useState(false);
  const ref = useRef(null);
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
    <div className="charlist">
      <div className={`charlist__header${isSticky ? " sticky" : ""}`} ref={ref}>
        PRUEBAAAAAAAAAAAA
      </div>
      <button
        type="button"
        onClick={() =>
          actions.filterCharacters({ key: "class", value: "Cerebral" })
        }
      >
        CEREBRAL
      </button>
      <button
        type="button"
        onClick={() =>
          actions.filterCharacters({ key: "class", value: "Slasher" })
        }
      >
        SLASHER
      </button>
      <button
        type="button"
        onClick={() => actions.filterCharacters({ key: "type", value: "DEX" })}
      >
        DEX
      </button>
      {charsShown.length &&
        charsShown.map((unit) => <Character unit={unit} key={Math.random()} />)}

      <ReactPaginate
        pageCount={Math.ceil(charactersFiltered.length / charsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        initialPage={0}
        previousLabel="previous"
        nextLabel="next"
        breakLabel="..."
        containerClassName="charlist__pagination"
        pageClassName="charlist__pagination-page"
        activeClassName="charlist__pagination-active"
        nextLinkClassName="charlist__pagination-next"
        previosLinkClassName="charlist__pagination-previous"
        onPageChange={({ selected }) => {
          window.scrollTo({ top: 0, behavior: "smooth" });
          setPagination(selected);
        }}
      />
    </div>
  );
}

export function mapStateToProps(state) {
  return {
    characters: state.charactersReducer.characters,
    charsShown: state.charactersReducer.charsShown,
    charactersFiltered: state.charactersReducer.charactersFiltered,
  };
}
export function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        loadAllCharacters,
        loadCharsShown,
        filterCharacters,
      },
      dispatch
    ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);
