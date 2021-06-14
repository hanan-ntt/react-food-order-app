import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = (props) => {
  const { items, totalAmount } = useContext(CartContext);
  const cartItem = (
    <ul className={classes['cart-items']}>
      {items.length > 0 ? (
        items.map((item) => <li>{item.name}</li>)
      ) : (
        <li>Nothing added to the cart.</li>
      )}
    </ul>
  );
  return (
    <Modal onModalClose={props.onCartClose}>
      {cartItem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{`£${totalAmount}`}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onCartClose}>
          Close
        </button>
        {totalAmount > 0 && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
