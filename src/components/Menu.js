import React from "react";

export class Menu extends React.Component {
  render() {
    return (
      <div className="food">
        <div
          className="hero-image"
          style={{ backgroundImage: `url(${this.props.imageurl})` }}
        />
        <div className="cover cover-content">
          <div className="name-price">
            <h4>{this.props.menutitle}</h4>
            <h4>&#8358; {this.props.price}</h4>
          </div>
          <div className="quantity-section" />
          <button
            onClick={() => this.props.addToOrder(this.props.menuid)}
            className="add-to-cart"
          >
            ADD TO CART
          </button>
        </div>
      </div>
    );
  }
}
export default Menu;
