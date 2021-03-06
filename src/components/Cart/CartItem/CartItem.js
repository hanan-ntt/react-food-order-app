import { useContext } from 'react';
import CartContext from '../../../store/cart-context';
import classes from './CartItem.module.css';

const CartItem = (props) => {
  const { item } = props;
  const { name, price: itemPrice, amount } = item;
  const { addItem, removeItem } = useContext(CartContext);
  const price = `£${itemPrice.toFixed(2)}`;
  const plusClickHandler = () => {
    const updatedItem = { ...item, amount: 1 };
    addItem(updatedItem);
  };
  const minusClickHandler = () => {
    const updatedItem = { ...item, amount: 1 };
    removeItem(updatedItem);
  };
  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={minusClickHandler}>−</button>
        <button onClick={plusClickHandler}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
