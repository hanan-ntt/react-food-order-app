import React, { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const { cartContext } = useContext(CartContext);
  const [itemAdded, setItemAdded] = useState(false);
  const btnClasses = `${classes.button} ${itemAdded ? classes.bump : ''}`;
  const numberOfItemsInCart = cartContext.items.reduce((currentCount, item) => {
    return currentCount + item.amount;
  }, 0);
  useEffect(() => {
    if (cartContext.items.length === 0) {
      return;
    }
    setItemAdded(true);
    const timer = setTimeout(() => {
      setItemAdded(false);
    }, 250);
    return () => {
      clearTimeout(timer);
    };
  }, [cartContext.items]);
  return (
    <>
      <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfItemsInCart}</span>
      </button>
    </>
  );
};

export default HeaderCartButton;
