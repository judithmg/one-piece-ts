import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import {
  filterCharacters,
  costFilter,
} from "../../redux/actions/charactersActions";
import Slider from "@material-ui/core/Slider";
import { RootState } from "../../redux/reducers";

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const CostFilter: React.FC<Props> = ({ actions }: Props) => {
  const [value, setValue] = useState([0, 99]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    actions.costFilter(value);
  };

  return (
    <div className="charfilters__stars">
      <h2>Cost filters</h2>
      <Slider
        value={value}
        min={1}
        max={99}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
      />
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
        costFilter,
      },
      dispatch
    ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CostFilter);
