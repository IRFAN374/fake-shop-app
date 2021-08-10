import {
    // SET_PRODUCTS,
    // SELECTED_PRODUCT,
    // REMOVE_SELECTED_PRODUCT
    ActionTypes
}from '../constants/actionType';

//import axios from 'axios';


export const setProducts = (product)=>{
    return{
       type: ActionTypes.SET_PRODUCTS,
       payload: product
    }
}

export const selectedProduct = (product)=>{
    return{
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product 
    }
}

export const removeSelectedProducts = ()=>{
    return{
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    }
}


