import React from 'react';
import ReactDOM from 'react-dom';



/* 

Header
-Logo
-Nav Items

Body
-Search
-Restaurant Container
  -Restaurant Cards

Footer
-Copyright
-Address
-Contact


*/


const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img 
          className="logo" 
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" />
      </div>
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

const Restaurantcard = (props) => {
  const {restaurantData} = props;
  return (
    <div className="restaurant-card" style={{  backgroundColor: "#f0f0f0" }}>
      <img
       className="restaurant-logo"
       alt = "restaurant-logo"
       src={restaurantData.image}>
      </img>
      <h3>{restaurantData.restaurantname}</h3>
      <h4>{restaurantData.cuisine}</h4>
      <h4>{restaurantData.ratings}</h4>
      <h4>{restaurantData.deliverytime}</h4>
      <h4>₹{restaurantData.price}</h4>
    </div>
  )
}

const restaurantobj = [
  {
  image: "https://b.zmtcdn.com/data/pictures/3/20669503/144fc8254779fbb0df44c72c8dc1075b_o2_featured_v2.jpg?output-format=webp",
  restaurantname: "KFC",
  cuisine: "Paneer",
  ratings: "4.8 stars",
  deliverytime: "40 minutes",
  price: 400
  },
  {
    image: "https://b.zmtcdn.com/data/pictures/7/18535157/429ec6ddd1350367aae4aea48a031ece_o2_featured_v2.jpg?output-format=webp",
    restaurantname: "KFC",
    cuisine: "Paneer",
    ratings: "4.8 stars",
    deliverytime: "40 minutes",
    price: 400
  } 
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restaurant-container">
        <Restaurantcard restaurantData = {restaurantobj[0]} />
        <Restaurantcard restaurantData = {restaurantobj[1]} />
      </div>
    </div>
  )
}

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

