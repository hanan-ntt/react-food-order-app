import { useReducer } from 'react';
import CartContext from './cart-context';
const cartInitialState = {
  items: [],
  totalAmount: 0,
  dispatch: 'reset',
};
const cartReducer = (state, action) => {
  const { type, item } = action;
  switch (type) {
    case 'ADD':
      if (state.items.length > 0) {
        const existingItemIndex = state.items.findIndex(
          (cartItem) => cartItem.id === item.id
        );
        const existingItem = state.items[existingItemIndex];
        let updatedItem;
        let updatedItems;
        if (existingItem) {
          updatedItem = {
            ...existingItem,
            amount: existingItem.amount + item.amount,
          };
          updatedItems = [...state.items];
          updatedItems[existingItemIndex] = updatedItem;
        } else {
          updatedItems = state.items.concat(item);
        }
        const updatedTotalAmount = state.totalAmount + item.price * item.amount;
        return {
          items: updatedItems,
          totalAmount: updatedTotalAmount,
        };
      }
      if (state.items.length === 0) {
        const updatedItems = state.items.concat(item);
        const updatedTotalAmount = state.totalAmount + item.price * item.amount;
        return {
          items: updatedItems,
          totalAmount: updatedTotalAmount,
        };
      }
      break;
    default:
      return state;
  }
};
const CartProvider = (props) => {
  const [cartState, dispatch] = useReducer(cartReducer, cartInitialState);
  const addItemHandler = (item) => {
    dispatch({ type: 'ADD', item: item });
  };
  const removeItemHandler = () => {};
  return (
    <CartContext.Provider
      value={{
        cartContext: cartState,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
