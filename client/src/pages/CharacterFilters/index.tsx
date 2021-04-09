import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  filterCharacters,
  clearFilters,
} from "../../redux/actions/charactersActions";

import TypeFilter from "./TypeFilter";
import StarsFilter from "./StarsFilter";
import ClassFilter from "./ClassFilter";
import ComboFilter from "./ComboFilter";
import CostFilter from "./CostFilter";

interface Props {
  actions: {
    filterCharacters: Function;
    clearFilters: Function;
  };
}

export function CharacterFilters({ actions }: Props) {
  return (
    <article className="charfilters">
      <TypeFilter />
      <ClassFilter />
      <ComboFilter />
      <StarsFilter />
      <CostFilter />

      <button
        className="btn-filter btn-clear"
        type="button"
        onClick={() => actions.clearFilters()}
      >
        CLEAR ALL FILTERS
      </button>
    </article>
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
        clearFilters,
      },
      dispatch
    ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterFilters);
