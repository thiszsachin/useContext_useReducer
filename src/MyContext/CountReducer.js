import { DECREMENT, INCREMENT } from "./CountActions";

const CountReducer = (state, action) => {
  switch (action) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

export default CountReducer;
