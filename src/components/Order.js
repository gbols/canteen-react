import React from "react";

const Order = () => (
  <div className="food">
    <img src="https://res.cloudinary.com/daj3mflah/image/upload/v1538707203/emapkvg6whfgi0ge759w.jpg" />
    <div className="cover cover-content">
      <div className="name-price">
        <h4>Beans and Yam</h4>
        <h4>#850</h4>
      </div>
      <p>Iyan is made from pounding yam repeatedly with a club like cooking</p>
      <span className="name-price">
        <h4>
          Unit Sum<time className="num">6800</time>
        </h4>
        <h4>
          Quantity <span className="num"> 8</span>
        </h4>
      </span>
      <button id="1" className="remove-from-cart">
        REMOVE
      </button>
    </div>
  </div>
);

export default Order;
