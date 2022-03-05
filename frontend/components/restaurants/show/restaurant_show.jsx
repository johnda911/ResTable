import React from "react";
import { Link } from "react-router-dom";
import SafetyPrecautions from "./safety_precautions";
import Menu from "./menu";
import Rating from "./rating";
import DollorRange from "./dollor_range";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { GrLocation } from "react-icons/gr";
import { AiOutlinePhone } from "react-icons/ai";
import { BiBuildingHouse } from "react-icons/bi";
import { BsClockHistory } from "react-icons/bs";
import { BiDish } from "react-icons/bi";
import { GiLargeDress } from "react-icons/gi";
import { RiParkingBoxLine } from "react-icons/ri";
import { MdPayment } from "react-icons/md";

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
                  <div id="overview">Overview</div>
                  <div>Experiences</div>
                  <div>Offers</div>
                  <div>Popular dishes</div>
                  <div>Menu</div>
                  <div>Reviews</div>
                </div>
                <h2 className="rest-name">{restaurant.name}</h2>
                <div className="rest-meta-data">
                  <div className="short-div">
                    <Rating rating="4.4" />
                  </div>
                  <div className="short-div">
                    <DollorRange expense={restaurant.expense} />
                  </div>
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
                {/* <button onclick="myFunction()" id="myBtn">
                  Read more
                </button> */}

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
                <div className="attri">
                  <div className="attri-name">
                    <AiOutlinePhone className="icon" />
                    Phone
                  </div>
                  <div className="attri-content">{restaurant.phone}</div>
                </div>
                <div className="attri">
                  <div className="attri-name">
                    <BiBuildingHouse className="icon" />
                    Neighborhood
                  </div>
                  <div className="attri-content">{restaurant.neighborhood}</div>
                </div>
                <div className="attri">
                  <div className="attri-name">
                    <BsClockHistory className="icon" />
                    Hours of operation
                  </div>
                  <div className="attri-content">
                    {restaurant.operation_hours}
                  </div>
                </div>

                <div className="attri">
                  <div className="attri-name">
                    <BiDish className="icon" />
                    Dining Style
                  </div>
                  <div className="attri-content">{restaurant.dining_style}</div>
                </div>

                <div className="attri">
                  <div className="attri-name">
                    <GiLargeDress className="icon" />
                    Dress Code
                  </div>
                  <div className="attri-content">{restaurant.dress_code}</div>
                </div>

                <div className="attri">
                  <div className="attri-name">
                    <RiParkingBoxLine className="icon" />
                    Parking details
                  </div>
                  <div className="attri-content">
                    {restaurant.parking_details}
                  </div>
                </div>

                <div className="attri">
                  <div className="attri-name">
                    <MdPayment className="icon" />
                    Payment options
                  </div>
                  <div className="attri-content">
                    {restaurant.payment_options}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}
export default RestaurantShow;
