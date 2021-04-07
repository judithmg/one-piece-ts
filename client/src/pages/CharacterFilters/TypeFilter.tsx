import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { filterCharacters } from "../../redux/actions/charactersActions";
import filtersArr from "../../constants/filters";
import "../../styles/CharacterFilters.scss";
export interface actionsInterface {
  actions: { filterCharacters: Function };
}

export function CharacterFilters({ actions }: actionsInterface) {
  return (
    <div className="charfilters__type">
      <h2>Type filters</h2>
      {filtersArr.type.map((type) => (
        <button
          type="button"
          onClick={() => actions.filterCharacters({ key: "type", value: type })}
          className={`btn-filter btn-filter-type ${type.toLowerCase()}`}
          key={Math.random()}
        >
          {type}
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
