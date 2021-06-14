import { useReducer } from 'react';
import CartContext from './cart-context';
const cartInitialState = {
  items: [],
  totalAmount: 0,
  dispatch: 'reset',
};
const cartReducer = (state, action) => {
  const { type, value } = action;
  if (type === 'ADD') {
    if (state.items.length > 0) {
      state.items.map((item) =>
        item.id === value.id && item.amount <= 5
          ? (item.amount += value.amount)
          : item.amount
      );
      return;
    }
    const updatedItems = state.items.concat(value);
    console.log(updatedItems);
    return {
      items: updatedItems,
    };
  }
  // switch (type) {
  //   case 'ADD':
  //     const updatedItems = state.items.concat(value);
  //     console.log(updatedItems);
  //     return {
  //       items: updatedItems,
  //     };
  //   default:
  //     return state;
  // }
};
const CartProvider = (props) => {
  const [cartState, dispatch] = useReducer(cartReducer, cartInitialState);
  return (
    <CartContext.Provider
      value={{ cartContext: cartState, cartAction: dispatch }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
