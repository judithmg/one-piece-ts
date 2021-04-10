import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { filterCharacters } from "../../redux/actions/charactersActions";
import filtersArr from "../../constants/filters";
import StarRatings from "../shared/StarRatings";

interface Props {
  actions: { filterCharacters: Function };
}
export function CharacterFilters({ actions }: Props) {
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
  ]);

  const handleClick = (stars, index) => {
    actions.filterCharacters({ key: "stars", value: stars });
    const newOpacity = [...opacity];
    opacity[index] === "" || opacity[index] === null
      ? (newOpacity[index] = "--applied")
      : (newOpacity[index] = "");
    setOpacity(newOpacity);
  };

  return (
    <div className="charfilters__stars">
      <h2>Rarity filters</h2>

      {filtersArr.stars.map((stars, index) => (
        <button
          type="button"
          onClick={() => handleClick(stars, index)}
          className={`${opacity[index]} btn-filter btn-filter-stars`}
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
