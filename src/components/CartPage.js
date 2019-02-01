import React from "react";
import Navbar from "./Navbar";
import Order from "./Order";
import Footer from "./Footer";

const cartPage = () => (
  <section className="contain">
    <header>
      <Navbar />
    </header>
    <main>
      <div className="food-items">
        <h2 id="history">HISTORY OF YOUR ORDERS</h2>
      </div>
      <div className="all-foods">
        <Order />
      </div>
    </main>
    <h4>
      Total Sum<time className="num">51800</time>
    </h4>
    <span id="order-spinner-message">
      <button id="order" style={{ backgroundColor: "orangered" }}>
        PLACE ORDER
      </button>
      <h2 id="empty" class="num" style={{ display: "none" }}>
        Your Cart is Empty
      </h2>
    </span>
    <Footer />
  </section>
);

export default cartPage;
