import React from "react";

const Menu = (props) => (
  <div className="food">
    <div className="hero-image" style={{backgroundImage: `url(${props.imageurl})`}}>
    </div>
    <div className="cover cover-content">
      <div className="name-price">
        <h4>{props.menutitle}</h4>
        <h4>&#8358;  {props.price}</h4>
      </div>
      <div className="quantity-section">
      </div>
      <button id={props.menuid} className="add-to-cart">
        ADD TO CART
      </button>
    </div>
  </div>
);

export default Menu;
