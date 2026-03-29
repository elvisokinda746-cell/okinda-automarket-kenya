import React, { createContext, useReducer } from 'react';

const CartContext = createContext();

const initialState = {
    items: [],
    totalAmount: 0,
};

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            const updatedItems = [...state.items, action.item];
            const updatedTotalAmount = state.totalAmount + action.item.price;
            return { items: updatedItems, totalAmount: updatedTotalAmount };
        case 'REMOVE_ITEM':
            const filteredItems = state.items.filter(item => item.id !== action.id);
            const itemToRemove = state.items.find(item => item.id === action.id);
            const newTotalAmount = state.totalAmount - (itemToRemove ? itemToRemove.price : 0);
            return { items: filteredItems, totalAmount: newTotalAmount };
        case 'CLEAR_CART':
            return initialState;
        default:
            return state;
    }
};

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return React.useContext(CartContext);
};