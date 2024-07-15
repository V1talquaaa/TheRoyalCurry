import { cardReducer } from "./cart/cardSlice";
import { counterReducer } from "./counterSlice";

export const reducer = {
    counter: counterReducer,
    card: cardReducer,
}