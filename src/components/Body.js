import RestaurantCard from "./RestaurantCard";
import restaurantlist from "./utils/mockData";
import { useState } from "react";


// let restaurantlist = [
//   {
//     key: "1",
//     image: "https://b.zmtcdn.com/data/pictures/3/20669503/144fc8254779fbb0df44c72c8dc1075b_o2_featured_v2.jpg?output-format=webp",
//     restaurantname: "KFC",
//     cuisine: "Paneer",
//     ratings: "4.8",
//     deliverytime: "40 minutes",
//     price: 400
//   },
//   {
//     key: "2",
//     image: "https://b.zmtcdn.com/data/pictures/7/18535157/429ec6ddd1350367aae4aea48a031ece_o2_featured_v2.jpg?output-format=webp",
//     restaurantname: "KFC",
//     cuisine: "Paneer",
//     ratings: "3.8",
//     deliverytime: "40 minutes",
//     price: 400  
//   },
//   {
//     key: "3",
//     image: "https://b.zmtcdn.com/data/pictures/3/20669503/144fc8254779fbb0df44c72c8dc1075b_o2_featured_v2.jpg?output-format=webp",
//     restaurantname: "KFC",
//     cuisine: "Paneer",
//     ratings: "4.8",
//     deliverytime: "40 minutes",
//     price: 400
//   }
// ];


const Body = () => {
  const [listOfRestaurant, setlistOfRestaurant] = useState(restaurantlist);
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={() => {
          const filteredList = listOfRestaurant.filter(
            (res) => res.ratings > 4
          );
          setlistOfRestaurant(filteredList);
        }}>Top Rated Restaurant</button>
      </div>
      <div className="restaurant-container">
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.key} restaurantData={restaurant} />
        ))}
      </div>
    </div>
  )
}

export default Body;