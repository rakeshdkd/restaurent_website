import React from "react";

import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
const Cart = (props) => {
  const cartItems = (
    <ul className={classes.cart_items}>
      {[{ id: "1", name: "xoxo food", amount: "2", price: "15.99" }].map(
        (item) => (
          <li key={item.id}>{item.name}</li>
        )
      )}
    </ul>
  );
  return (
    <Modal onClick={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>$35.84</span>
      </div>

      <div className={classes.actions}>
        <button className={classes.button_alt} onClick={props.onClose}>
          close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
