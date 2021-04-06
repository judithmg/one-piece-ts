import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Character from "./CharacterRow";
import CharacterHeader from "./CharacterHeader";
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

  return (
    <div className="charlist">
      <CharacterHeader />
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
        onClick={() =>
          actions.filterCharacters({ key: "class", value: "Powerhouse" })
        }
      >
        POWERHOUSE
      </button>
      <button
        type="button"
        onClick={() =>
          actions.filterCharacters({ key: "class", value: "Driven" })
        }
      >
        Driven
      </button>
      <button
        type="button"
        onClick={() => actions.filterCharacters({ key: "type", value: "INT" })}
      >
        INT
      </button>
      {charsShown.length &&
        charsShown.map((unit) => <Character unit={unit} key={Math.random()} />)}

      <ReactPaginate
        pageCount={Math.ceil(charactersFiltered.length / charsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        initialPage={0}
        previousLabel="Previous"
        nextLabel="Next"
        breakLabel="..."
        breakLinkClassName="charlist__pagination-break"
        containerClassName="charlist__pagination"
        pageClassName="charlist__pagination-page"
        activeClassName="charlist__pagination-active"
        nextLinkClassName="charlist__pagination-next"
        previousLinkClassName="charlist__pagination-previous"
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
