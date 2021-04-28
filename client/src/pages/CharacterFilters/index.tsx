import React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import {
  filterCharacters,
  clearFilters,
} from "../../redux/actions/charactersActions";

import TypeFilter from "./TypeFilter";
import StarsFilter from "./StarsFilter";
import ClassFilter from "./ClassFilter";
import ComboFilter from "./ComboFilter";
import CostFilter from "./CostFilter";

import Toggle from "../../components/Toggle";
import { RootState } from "../../redux/reducers";

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;
const CharacterFilters: React.FC<Props> = ({ actions }: Props) => {
  return (
    <article className="charfilters" data-aos="fade-in">
      <Toggle />
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
};

export function mapStateToProps(state: RootState) {
  return {
    charactersFiltered: state.charactersReducer.charactersFiltered,
    filters: state.charactersReducer.filters,
  };
}
export function mapDispatchToProps(dispatch: Dispatch) {
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
