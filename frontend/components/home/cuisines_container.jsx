import React, { Component } from "react";
import Cuisine from "./cuisine";

class CuisinesContainer extends Component {
  render() {
    return (
      <div className="search-dd">
        {this.props.cuisines.map((cuisine) => (
          <Cuisine
            cuisine={cuisine}
            key={cuisine}
            onCuisineSelected={this.props.onCuisineSelected}
          />
        ))}
      </div>
    );
  }
}

export default CuisinesContainer;
