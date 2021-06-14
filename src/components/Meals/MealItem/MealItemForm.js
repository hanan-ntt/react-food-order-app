import React, { useContext, useRef } from 'react';
import CartContext from '../../../store/cart-context';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
  const { mealDetails } = props;
  const mealItemRef = useRef();
  const { cartAction } = useContext(CartContext);
  let mealWithQuantity;
  const handleMealItemSubmission = (e) => {
    e.preventDefault();
    if (mealItemRef.current.value >= 1) {
      mealWithQuantity = {
        ...mealDetails,
        amount: +mealItemRef.current.value,
      };
    }
    cartAction({ type: 'ADD', value: mealWithQuantity });
  };
  return (
    <form className={classes.form} onSubmit={handleMealItemSubmission}>
      <Input
        ref={mealItemRef}
        label='Amount'
        input={{
          id: 'amount' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
