import React, { Component } from "react";

export default (props) => {
  const itemSelected = () => {
    props.onCuisineSelected(props.cuisine);
  };

  return (
    <div className="search-dd-item" onMouseDown={itemSelected}>
      {props.cuisine}
    </div>
  );
};
