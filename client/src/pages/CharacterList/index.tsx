import React, { useEffect, useState } from "react";
import getThumbnailUrl from "../../utils/getThumbnailUrl";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  loadAllCharacters,
  loadCharsShown,
} from "../../redux/actions/charactersActions";

export function CharacterList({ actions, characters, charsShown }) {
  const [pagination, setPagination] = useState(1);
  const charsPerPage = 20;

  useEffect(() => {
    actions.loadCharsShown(pagination, charsPerPage);
  }, [actions, characters, pagination]);

  useEffect(() => {
    if (!characters?.length) {
      actions.loadAllCharacters();
    }
  }, [actions, characters]);

  return (
    <>
      {charsShown.length &&
        charsShown.map((unit) => (
          <div>
            <div className="unit-img">
              <img src={getThumbnailUrl(unit.id + 1)} alt="unit img" />
            </div>
            <div className="unit-id">
              <Link to={`/${unit.id}`}>{unit.id + 1}</Link>
            </div>
            <div className="unit-name">{unit.name}</div>
            <div className="unit-type">{unit.type}</div>
            <div className="unit-class">{unit.class}</div>
            <div className="unit-stars">{unit.stars}</div>
            <div className="unit-maxHP">{unit.maxHP}</div>
            <div className="unit-maxATK">{unit.maxATK}</div>
            <div className="unit-maxRCV">{unit.maxRCV}</div>
          </div>
        ))}
      <ReactPaginate
        pageCount={Math.ceil(characters.length / charsPerPage)}
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
    </>
  );
}

export function mapStateToProps(state) {
  return {
    characters: state.charactersReducer.characters,
    charsShown: state.charactersReducer.charsShown,
  };
}
export function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        loadAllCharacters,
        loadCharsShown,
      },
      dispatch
    ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);
