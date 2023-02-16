import Cart from "../components/Cart";
import { ACT_BUY, ACT_DELETE, ACT_UPDATE } from "../constant/constantType";
let initialState = []
let shoppingCart = JSON.parse(localStorage.getItem("shoppingCart"))
initialState = (shoppingCart!=null&&shoppingCart.length>0) ? shoppingCart : initialState

const checkId = (cart, productId) => {
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].product.productId === productId) {
            return i
        }
    }
    return -1;
}
const callTotal = (cart) => {
let total = 0
cart.forEach(element => {
    total += element.product.price * element.quantity
});
return total
}
export const listCart = (state = initialState, action) => {
    switch (action.type) {
        case ACT_BUY:
            if (state.length == 0) {
                let newCart = { product: action.payload.product, quantity: action.payload.quantity }
                state = [...state,newCart]
                localStorage.setItem("shoppingCart", JSON.stringify(state))
                localStorage.setItem("totalAmount",callTotal(state))

                return state                
            } else {
                let id = checkId(state, action.payload.product.productId)              
                if (id === -1) {
                    let cart = { product: action.payload.product, quantity: action.payload.quantity }
                    state.push(cart)
                } else {
                    state[id].quantity += parseInt(action.payload.quantity)
                }
                localStorage.setItem("shoppingCart",JSON.stringify(state))
                localStorage.setItem("totalAmount",callTotal(state))
                return [...state]
            }
            case ACT_UPDATE:
               
                let id = checkId(state, action.payload.productId)
                if (id !== -1) {
                    state[id].quantity = action.payload.quantity
                }   
                return [...state]
            case ACT_DELETE:
               let newCart = state.filter((state) => state.product.productId!==action.payload)
               localStorage.removeItem("shoppingCart","totalAmount")
               localStorage.setItem("shoppingCart",JSON.stringify(newCart))
                localStorage.setItem("totalAmount",callTotal(newCart))
                return [...newCart]
        default:
            return state
    }
}