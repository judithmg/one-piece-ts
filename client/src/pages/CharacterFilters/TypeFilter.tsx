import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { filterCharacters } from "../../redux/actions/charactersActions";
import filtersArr from "../../constants/filters";
import "../../styles/CharacterFilters.scss";
interface Props {
  actions: { filterCharacters: Function };
}

export function TypeFilter({ actions }: Props) {
  const [opacity, setOpacity] = useState(["", "", "", "", "", ""]);

  const handleClick = (type, index) => {
    actions.filterCharacters({ key: "type", value: type });
    const newOpacity = [...opacity];
    opacity[index] === "" || opacity[index] === null
      ? (newOpacity[index] = "--applied")
      : (newOpacity[index] = "");
    setOpacity(newOpacity);
  };
  return (
    <div className="charfilters__type">
      <h2>Type filters</h2>
      {filtersArr.type.map((type, index) => (
        <button
          type="button"
          onClick={() => handleClick(type, index)}
          className={`${type.toLowerCase()} btn-filter btn-filter-type ${
            opacity[index]
          }`}
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

export default connect(mapStateToProps, mapDispatchToProps)(TypeFilter);
