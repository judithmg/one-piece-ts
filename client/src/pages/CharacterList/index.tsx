import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Character from "./CharacterRow";
import CharacterHeader from "./CharacterHeader";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  loadAllCharacters,
  loadCharsShown,
  areCharactersLoading,
} from "../../redux/actions/charactersActions";
import "../../styles/CharacterList.scss";

import BeatLoader from "react-spinners/BeatLoader";
import { characterInterface } from "../../interfaces/charsInterface";
interface Props {
  characters: characterInterface[];
  charsShown: characterInterface[];
  charactersFiltered: characterInterface[];
  actions: {
    loadAllCharacters: Function;
    loadCharsShown: Function;
    areCharactersLoading: Function;
  };
  filters: any;
  loadingCharacters: boolean;
}

export function CharacterList({
  actions,
  characters,
  charsShown,
  charactersFiltered,
  filters,
  loadingCharacters,
}: Props) {
  const [pagination, setPagination] = useState(1);
  const charsPerPage = 20;

  useEffect(() => {
    actions.loadCharsShown(pagination, charsPerPage);
  }, [actions, charactersFiltered, pagination, filters]);

  useEffect(() => {
    setPagination(0);
  }, [filters]);

  useEffect(() => {
    if (!characters.length) {
      actions.loadAllCharacters();
      actions.areCharactersLoading();
    }
  }, [actions, characters]);

  return (
    <article className="charlist" data-aos="fade-in">
      <CharacterHeader />
      {loadingCharacters ? (
        <div className="charlist-spinner">
          <BeatLoader color={"teal"} />
        </div>
      ) : (
        charsShown &&
        charsShown.map((unit) => <Character unit={unit} key={Math.random()} />)
      )}

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
    </article>
  );
}

export function mapStateToProps(state: any) {
  return {
    characters: state.charactersReducer.characters,
    charsShown: state.charactersReducer.charsShown,
    charactersFiltered: state.charactersReducer.charactersFiltered,
    filters: state.charactersReducer.filters,
    loadingCharacters: state.charactersReducer.loadingCharacters,
  };
}
export function mapDispatchToProps(dispatch: any) {
  return {
    actions: bindActionCreators(
      {
        loadAllCharacters,
        loadCharsShown,
        areCharactersLoading,
      },
      dispatch
    ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);
