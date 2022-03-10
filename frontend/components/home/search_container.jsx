import * as React from "react";
import CuisinesContainer from "./cuisines_container";
import { connect } from "react-redux";
import { RECEIVE_CUSINE } from "../../actions/search_actions";

class Search extends React.Component {
  state = {
    cuisines: [
      "American",
      "Italian",
      "Chinese",
      "Mexican",
      "Japanese",
      "Spanish",
      "Pizzeria",
      "Grill",
      "Mediterranean",
      "Steakhouse",
    ],
    searchTerm: "",
    showResults: false,
  };

  editSearchTerm = (e) => {
    this.setState({ searchTerm: e.target.value });
    this.props.receiveCuisine(e.target.value);
  };

  dynamicSearch = () => {
    return this.state.cuisines.filter((cuisine) =>
      cuisine.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );
  };

  onCuisineSelected = (cuisine) => {
    this.setState({ searchTerm: cuisine });
    this.props.receiveCuisine(cuisine);
  };

  render() {
    return (
      <div className="search-bar" style={{ textAlign: "center" }}>
        <div className="input-icons">
          <i className="fa-solid fa-magnifying-glass fa-xl"></i>
          <input
            className="input-field"
            type="text"
            value={this.state.searchTerm}
            onChange={this.editSearchTerm}
            onFocus={() => this.setState({ showResults: true })}
            onBlur={() => this.setState({ showResults: false })}
            placeholder="Search for a cuisine"
          />
        </div>
        {this.state.showResults && (
          <CuisinesContainer
            cuisines={this.dynamicSearch()}
            onCuisineSelected={this.onCuisineSelected}
            searchTerm={this.state.searchTerm}
          />
        )}
      </div>
    );
  }
}

const mSTP = (state) => {
  return {
    cuisine: state.ui.search,
  };
};

const mDTP = (dispatch) => {
  return {
    receiveCuisine: (cuisine) => {
      dispatch({ type: RECEIVE_CUSINE, search: cuisine });
    },
  };
};

export default connect(mSTP, mDTP)(Search);
