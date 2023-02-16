import { ACT_BUY, ACT_DELETE, ACT_UPDATE } from "../constant/constantType";

const initialState = {
    class: "info",
    content: "buy to ready"
}
export const notify = (state = initialState,action) => {
switch (action.type) {
    case ACT_BUY:
        return {
            class: "success",
            content: "buy is success"
        }
        
     case ACT_UPDATE:
        return  {
            class: "success",
            content: "update is success"
        }
        
     case ACT_DELETE:
        return {
            class: "warnning",
            content: "deleted product"
        }
        

    default:
        return state
}
}