import { useDispatch, useSelector } from "react-redux";
import classes from "./CartButton.module.css";
import { uiActions } from "../../store/ui-slice";

const CartButton = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const itemsQuantity = cartItems.reduce((acc, cur) => {
    return (acc = acc + cur.quantity);
  }, 0);

  const handleCartToggle = () => {
    dispatch(uiActions.toogle());
  };

  return (
    <button className={classes.button} onClick={handleCartToggle}>
      <span>My Cart</span>
      <span className={classes.badge}>{itemsQuantity}</span>
    </button>
  );
};

export default CartButton;
