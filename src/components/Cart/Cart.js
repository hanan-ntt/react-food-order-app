import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import CartItem from './CartItem/CartItem';
import classes from './Cart.module.css';

const Cart = (props) => {
  const { cartContext } = useContext(CartContext);
  const { items, totalAmount } = cartContext;
  const cartItem = (
    <ul className={classes['cart-items']}>
      {items.length > 0 ? (
        items.map((item) => <CartItem key={item.id} item={item} />)
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
        <span>{`£${totalAmount.toFixed(2)}`}</span>
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
