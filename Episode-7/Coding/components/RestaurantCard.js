import { CDN_URL } from "../constants";

const RestaurantCard = (props) => {
  //console.log(props); // object
  const { resData } = props;
  const { cloudinaryImageId, name, costForTwo, avgRating, cuisines } =
    resData?.info; // optional chaining && destructuring
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="res-logo" src={CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h5> {cuisines.join(",")}</h5>
      <h5>{costForTwo}</h5>
      <h5>{avgRating} Rating</h5>
    </div>
  );
};

export default RestaurantCard;
