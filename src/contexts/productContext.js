import React from "react";
import axios from 'axios';

export const productContext = React.createContext();

const INIT_STATE = {
products: {}

}


function reducer  (state = INIT_STATE, action) {
    switch(action.type) {
        case "GET_PRODUCTS":
            return {...state, products: action.payload};
    default:
        return state;

    }
}

const ProductContextProvider = ({ children }) => {
    return <productContext.Provider value={{}}>{children}</productContext.Provider>
}

export default ProductContextProvider;