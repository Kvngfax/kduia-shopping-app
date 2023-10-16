import React, { createContext, useReducer } from 'react';

// The reducer - this is used to update the state, based on the action
export const AppReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_QUANTITY':
        case 'RED_QUANTITY':
        case 'DELETE_ITEM': {
            const updatedExpenses = state.expenses.map((expense) => {
                if (expense.name === action.payload.name) {
                    let updatedQuantity;
                    switch (action.type) {
                        case 'ADD_QUANTITY':
                            updatedQuantity = expense.quantity + action.payload.quantity;
                            break;
                        case 'RED_QUANTITY':
                            updatedQuantity = expense.quantity - action.payload.quantity;
                            updatedQuantity = Math.max(updatedQuantity, 0); // prevent negative values
                            break;
                        case 'DELETE_ITEM':
                            updatedQuantity = 0;
                            break;
                        default:
                            updatedQuantity = expense.quantity;
                    }
                    return { ...expense, quantity: updatedQuantity };
                }
                return expense;
            });
            return { ...state, expenses: updatedExpenses };
        }
        case 'CHG_LOCATION':
            return { ...state, Location: action.payload };
        default:
            console.warn(`Unhandled action type: ${action.type}`);
            return state;
    }
};

const initialState = {
    expenses: [
        { id: "Shirt", name: 'Shirt', quantity: 0, unitprice: 500 },
        { id: "Jeans", name: 'Jeans', quantity: 0, unitprice: 300 },
        { id: "Dress", name: 'Dress', quantity: 0, unitprice: 400 },
        { id: "Dinner set", name: 'Dinner set', quantity: 0, unitprice: 600 },
        { id: "Bags", name: 'Bags', quantity: 0, unitprice: 200 },
    ],
    Location: '£'
};

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const totalExpenses = state.expenses.reduce((total, item) => total + (item.unitprice * item.quantity), 0);

    return (
        <AppContext.Provider
            value={{
                expenses: state.expenses,
                CartValue: totalExpenses,
                dispatch,
                Location: state.Location
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};
