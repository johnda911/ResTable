import React from "react";
import { Link, withRouter } from "react-router-dom";
import { BsCurrencyDollar } from "react-icons/bs";

class RestaurantIndexItem extends React.Component {
  // handleClick() => {
  // }
  restaurantName(name) {
    return name.length < 30 ? (
      <span className="res-profile-name">{name}</span>
    ) : (
      <span className="res-profile-name">{`${name.substring(0, 27)}...`}</span>
    );
  }

  render() {
    const { restaurant } = this.props;
    return (
      <Link
        to={`/restaurant/${restaurant.id}`}
        className="restaurant-profile-item"
      >
        <div className="res-profile-img">
          <img src={restaurant.restaurantPhotoURL} />
        </div>
        {/* <div className="res-profile-img">{restaurant.photo}</div> */}
        {/* <span className="res-profile-name">{restaurant.name}</span> */}
        {this.restaurantName(restaurant.name)}
        <span className="res-profile-info">
          {restaurant.cuisine} · <ExpenseRange expense={restaurant.expense} /> ·{" "}
          {restaurant.neighborhood}
        </span>
        <button className="res-profile-btn">Reserve</button>
      </Link>
    );
  }
}
export default RestaurantIndexItem;

const ExpenseRange = (props) => {
  const expenseLevel = props.expense;
  const remainingExpense = 4 - expenseLevel;

  return (
    <span className="four-dollar">
      {[...Array(expenseLevel)].map(() => (
        <BsCurrencyDollar className="black-dollar" key={Math.random()} />
      ))}
      {[...Array(remainingExpense)].map(() => (
        <BsCurrencyDollar className="grey-dollar" key={Math.random()} />
      ))}
    </span>
  );
};
