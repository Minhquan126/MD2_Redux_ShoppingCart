import { combineReducers } from "redux";
import { listProduct } from "./listProduct";
import { listCart } from "./listCart";
import { notify } from "./notify";
export const reducer = combineReducers({listProduct,listCart,notify})