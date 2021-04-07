import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { filterCharacters } from "../../redux/actions/charactersActions";
import filtersArr from "../../constants/filters";
import StarRatings from "../shared/StarRatings";

export interface actionsInterface {
  actions: { filterCharacters: Function };
}
export function CharacterFilters({ actions }: actionsInterface) {
  return (
    <div className="charfilters__stars">
      <h2>Rarity filters</h2>

      {filtersArr.stars.map((stars) => (
        <button
          type="button"
          onClick={() =>
            actions.filterCharacters({ key: "stars", value: stars })
          }
          className={`btn-filter btn-filter-stars`}
          key={Math.random()}
        >
          <StarRatings stars={stars} />
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
