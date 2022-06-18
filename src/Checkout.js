import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://m.media-amazon.com/images/G/01/AmazonGo/Engagment/2021/NewLP2021/LPRound3August/Header_TakeIt_1500x300.jpg"
          alt=""
          className="checkout__ad"
        />
        <div>
          <h2 className="checkout__title">Your Shipping Basket</h2>

          {/* basket items */}
          {/* basket items */}
          {/* basket items */}
          {/* basket items */}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
