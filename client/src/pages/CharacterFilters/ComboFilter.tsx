import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import filtersArr from "../../constants/filters";
import { filterCharacters } from "../../redux/actions/charactersActions";
export interface actionsInterface {
  actions: { filterCharacters: Function };
}

export function CharacterFilters({ actions }: actionsInterface) {
  return (
    <div className="charfilters__combo">
      <h2>Combo filters</h2>

      {filtersArr.combo.map((combo) => (
        <button
          type="button"
          onClick={() =>
            actions.filterCharacters({ key: "combo", value: combo })
          }
          className={`btn-filter btn-filter-combo`}
          key={Math.random()}
        >
          {combo}
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
