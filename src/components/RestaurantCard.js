const RestaurantCard = (props) => {
  const { restaurantData } = props;
  const {
    image,
    restaurantname,
    cuisine,
    ratings,
    deliverytime,
    price
  } = restaurantData;
  return (
    <div className="restaurant-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="restaurant-logo"
        alt="restaurant-logo"
        src={restaurantData.image}>
      </img>
      <h3>{restaurantname}</h3>
      <h4>{cuisine}</h4>
      <h4>{ratings}</h4>
      <h4>{deliverytime}</h4>
      <h4>₹{price}</h4>
    </div>
  )
}

export default RestaurantCard;