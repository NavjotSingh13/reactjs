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
  return (
    <div className="restaurant-card" style={{  backgroundColor: "#f0f0f0" }}>
      <img
       className="restaurant-logo"
       alt = "restaurant-logo"
       src="https://b.zmtcdn.com/data/pictures/3/20669503/144fc8254779fbb0df44c72c8dc1075b_o2_featured_v2.jpg?output-format=webp">
      </img>
      <h3>{props.restaurantname}</h3>
      <h4>{props.cuisine}</h4>
      <h4>{props.ratings}</h4>
      <h4>{props.deliverytime}</h4>
    </div>
  )
}

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restaurant-container">
        <Restaurantcard restaurantname="KFC" cuisine="Paneer" ratings="4.9 stars" deliverytime="50 minutes" />
        <Restaurantcard restaurantname="Pizzahut" cuisine="Pizza" ratings="4.9 stars" deliverytime="50 minutes" />
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

