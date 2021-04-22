import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import filtersArr from "../../constants/filters";
import { filterCharacters } from "../../redux/actions/charactersActions";
export interface Props {
  actions: { filterCharacters: Function };
}

export function ComboFilter({ actions }: Props) {
  const [opacity, setOpacity] = useState<string[]>([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  const handleClick = (combo, index) => {
    actions.filterCharacters({ key: "combo", value: combo });
    const newOpacity = [...opacity];
    opacity[index] === "" || opacity[index] === null
      ? (newOpacity[index] = "--applied")
      : (newOpacity[index] = "");
    setOpacity(newOpacity);
  };
  return (
    <div className="charfilters__combo">
      <h2>Combo filters</h2>

      {filtersArr.combo.map((combo, index) => (
        <button
          type="button"
          onClick={() => handleClick(combo, index)}
          className={`${opacity[index]} btn-filter btn-filter-combo`}
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

export default connect(mapStateToProps, mapDispatchToProps)(ComboFilter);
