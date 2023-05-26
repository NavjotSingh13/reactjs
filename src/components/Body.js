import RestaurantCard from "./RestaurantCard";
import restaurantlist from "./utils/mockData";

const Body = () => {
    return (
      <div className="body">
        <div className="search">Search</div>
        <div className="restaurant-container">
          {restaurantlist.map((restaurant) => (
            <RestaurantCard key={restaurant.key} restaurantData={restaurant} />
          ))}
        </div>
      </div>
    )
  }

  export default Body;