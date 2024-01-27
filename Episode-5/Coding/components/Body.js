import RestaurantCard from "./RestaurantCard";

import { useState } from "react";

import { resList } from "../constants";

const Body = () => {
  // local state variable -> super powerful variable

  const [listofRestaurants, setlistofRestaurant] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // filter logic
            const filteredList = listofRestaurants.filter(
              (res) => res.info.avgRating > 4.3
            );
            //console.log(listofRestaurants);
            setlistofRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listofRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
