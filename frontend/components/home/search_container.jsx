import * as React from "react";
// import Popover from "@mui/material/Popover";
// import { CgProfile } from "react-icons/cg";
// import { withRouter } from "react-router-dom";

class Search extends React.Component {
  state = {
    cuisines: [
      "American",
      "Italian",
      "Seafood",
      "French",
      "Chinese",
      "Indian",
      "Mexican",
      "Japanese",
      "British",
      "German",
      "Spanish",
      "Greek",
      "Pizzeria",
      "Taps",
      "Winery",
      "Turkish",
      "Grill",
      "Mediterranean",
      "Steakhouse",
    ],
    searchTerm: "",
  };

  editSearchTerm = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  dynamicSearch = () => {
    return this.state.cuisines.filter((cuisine) =>
      cuisine.toLowerCase().includes(htis.state.searchTerm.toLowerCase())
    );
  };

  render() {
    return (
      <div style={{ textAlign: "center", paddingTop: "30vh" }}>
        <input
          type="text"
          value={this.state.searchTerm}
          onChange={this.editSearchTerm}
          placeholder="Search for a cuisine"
        />
        <br />
        <h3>These are all cuisines options:</h3>
        {/* <CuisinesContainer cuisines={this.dynamicSearch()} /> */}
      </div>
    );
  }
}

export default Search;
