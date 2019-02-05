import React from "react";

const Order = props => (
  <div className="food">
    <div
      className="hero-image"
      style={{ backgroundImage: `url(${props.order.imageurl})` }}
    />
    <div className="cover cover-content">
      <div className="name-price">
        <h4>{props.order.menutitle}</h4>
        <h4>&#8358; {props.order.price}</h4>
      </div>
      <div className="name-price">
        <h4>
          UP
          <span
            onClick={() => props.addToOrder(props.order.menuid)}
            className="num"
          >
            &#x2b;
          </span>
        </h4>
        <h4>
          <span
            onClick={() => props.removeFromOrder(props.order.menuid)}
            className="num"
          >
            &#x2212;
          </span>
          DOWN
        </h4>
      </div>
      <span className="name-price">
        <h4>
          Unit Sum &#8358;
          <time className="num">
            {props.order.quantity * props.order.price}
          </time>
        </h4>
        <h4>
          Quantity <span className="num">{props.order.quantity}</span>
        </h4>
      </span>
      <button
        onClick={() => props.removeCartItem(props.order.menuid)}
        className="remove-from-cart"
      >
        REMOVE
      </button>
    </div>
  </div>
);

export default Order;
