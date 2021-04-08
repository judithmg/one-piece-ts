/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { filterCharacters } from "../../redux/actions/charactersActions";
import filtersArr from "../../constants/filters";
export interface actionsInterface {
  actions: { filterCharacters: Function };
}
export function CharacterFilters({ actions }: actionsInterface) {
  const [opacity, setOpacity] = useState(["", "", "", "", "", ""]);

  const handleClick = (classN, index) => {
    actions.filterCharacters({ key: "class", value: classN });
    const newOpacity = [...opacity];
    opacity[index] === "" || opacity[index] === null
      ? (newOpacity[index] = "--applied")
      : (newOpacity[index] = "");
    setOpacity(newOpacity);
  };
  return (
    <div className="charfilters__stars">
      <h2>Class filters</h2>

      {filtersArr.class.map((classN, index) => (
        <button
          type="button"
          onClick={() => handleClick(classN, index)}
          key={Math.random()}
          className={`btn-filter btn-filter-class ${opacity[index]}`}
        >
          <img src={`images/${classN.toLowerCase()}.png`} alt="class" />
        </button>
      ))}
    </div>
  );
}

export function mapStateToProps(state) {
  return {
    charactersFiltered: state.charactersReducer.charactersFiltered,
    filters: state.charactersReducer.filters,
  };
}
export function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        filterCharacters,
      },
      dispatch
    ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterFilters);
