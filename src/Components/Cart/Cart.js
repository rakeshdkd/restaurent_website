import React, { useContext } from "react";

import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../Store/Cart-context";
import CartItem from "./CartItem";
const Cart = (props) => {
  const cartCTX = useContext(CartContext);

  const totalAmount = `$${cartCTX.totalAmount.toFixed(2)}`;

  const hasItems = cartCTX.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCTX.removeItem(id)
  };
  const cartItemAddHandler = (item) => {
    cartCTX.addItem({...item, amount:1})
  };
  const cartItems = (
    <ul className={classes.cart_items}>
      {cartCTX.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClick={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>{totalAmount}</span>
      </div>

      <div className={classes.actions}>
        <button className={classes.button_alt} onClick={props.onClose}>
          close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
