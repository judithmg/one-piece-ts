import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { filterCharacters } from "../../redux/actions/charactersActions";
import filtersArr from "../../constants/filters";
import "../../styles/CharacterFilters.scss";
import { RootState } from "../../redux/reducers";

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const TypeFilter: React.FC<Props> = ({ actions }: Props) => {
  const [opacity, setOpacity] = useState(["", "", "", "", "", ""]);

  const handleClick = (type: string, index: number) => {
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

export default connect(mapStateToProps, mapDispatchToProps)(TypeFilter);
