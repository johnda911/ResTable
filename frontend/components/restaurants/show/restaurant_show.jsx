import React from "react";
import { Link } from "react-router-dom";
import SafetyPrecautions from "./safety_precautions";
import Menu from "./menu";
import DollorRange from "./dollor_range";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { GrLocation } from "react-icons/gr";

class RestaurantShow extends React.Component {
  componentDidMount() {
    this.props.requestRestaurant(this.props.match.params.restaurantId);
  }

  render() {
    const { restaurant } = this.props;
    return (
      <>
        {restaurant && (
          <div className="profile-pg-container">
            <div className="top-img">
              <img
                className="profile-photo"
                src={restaurant.restaurantPhotoURL}
              />
            </div>
            <div className="main-info">
              <div className="left-bar">
                <div className="navigation">
                  <div>Overview</div>
                  <div>Experiences</div>
                  <div>Offers</div>
                  <div>Popular dishes</div>
                  <div>Menus</div>
                  <div>Reviews</div>
                </div>
                <h2 className="rest-name">{restaurant.name}</h2>
                <div className="rest-meta-data">
                  <DollorRange expense={restaurant.expense} />
                  <div className="short-div">
                    <GiForkKnifeSpoon className="fork-icon" />
                    <span>{restaurant.cuisine}</span>
                  </div>
                </div>
                <div class="top-tag">
                  <div class="tag-title">Top Tags:</div>
                  <div class="tag-badge">Special Occasion</div>
                  <div class="tag-badge">Good For A Date</div>
                  <div class="tag-badge">Good For Anniversaries</div>
                </div>
                <div className="rest-description">{restaurant.description}</div>

                {/* <p>
                  Hudson Valley Steakhouse bringing 30 years of food and service
                  experience to Westchester County, located in Yorktown Ht's,
                  offering best quality prime and dry-aged Steak, Ribeye, Filet
                  Mignon, 40-ounce Porterhouse, Tomahawk, fresh Seafood and{" "}
                  <span id="dots">...</span>
                  <span id="more">
                    Italian specialties. Our bar and hightop table are made from
                    black walnut. Owner Tim Prengjoni and Staff stride to make
                    your dinning experience only the best. We welcome you, your
                    family, and friends to our home. Tim Prengjoni
                  </span>
                </p> */}

                <button onclick="myFunction()" id="myBtn">
                  Read more
                </button>

                <div className="safety-precautions">
                  <SafetyPrecautions />
                </div>
                <div className="module-container">
                  <Menu />
                </div>
              </div>
              <div className="right-bar">
                <div className="attri">
                  <div className="attri-name">
                    <GrLocation className="icon" />
                    Address
                  </div>
                  <div className="attri-content">{restaurant.address}</div>
                </div>
                <div>{restaurant.phone}</div>
                <div>{restaurant.neighborhood}</div>
                <div>{restaurant.noperation_hours}</div>
                <div>{restaurant.dining_style}</div>
                <div>{restaurant.dress_code}</div>
                <div>{restaurant.parking_details}</div>
                <div>{restaurant.payment_options}</div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}
export default RestaurantShow;
