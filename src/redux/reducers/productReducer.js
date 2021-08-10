import {ActionTypes} from '../constants/actionType';


const initialState = {
    products: [],
}

export const productReducer = (state=initialState,action)=>{
   switch(action.type){
       case ActionTypes.SET_PRODUCTS: return{
           ...state,
           products:action.payload
       }

       default:
           return state;

   }
}

export const selectedProductReducer = (state={},{type,payload})=>{
    switch(type){
        case ActionTypes.SELECTED_PRODUCT:
            return{
                ...state,
                ...payload
            }
        case ActionTypes.REMOVE_SELECTED_PRODUCT: return{
            
        }
        default:
            return state;
    }
}

// {
//     id: 1,
//     title: "Irfan",
//     category: "programmer"
// },
// {
//     id: 2,
//     title: "shyam",
//     category: "Analyst"
// }