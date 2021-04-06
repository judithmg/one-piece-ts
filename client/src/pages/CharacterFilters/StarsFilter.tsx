import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { filterCharacters } from "../../redux/actions/charactersActions";
import filtersArr from "../../constants/filters";

export function CharacterFilters({ actions, filters }) {
  return (
    <div className="charfilters__stars">
      {filtersArr.stars.map((stars) => (
        <button
          type="button"
          onClick={() =>
            actions.filterCharacters({ key: "stars", value: stars })
          }
        >
          {stars}
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
