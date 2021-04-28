import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { filterCharacters } from "../../redux/actions/charactersActions";
import filtersArr from "../../constants/filters";
import StarRatings from "../../components/StarRatings";
import { RootState } from "../../redux/reducers";

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const Stars: React.FC<Props> = ({ actions }: Props) => {
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

  const handleClick = (stars: string | number, index: number) => {
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
      },
      dispatch
    ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Stars);
