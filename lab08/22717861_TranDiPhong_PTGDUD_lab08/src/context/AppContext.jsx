import React, { act, useReducer } from 'react'
import { createContext } from 'react'

export const AppContext = createContext();

const counterReducer = (state, action) => {
    switch (action.type) {
        case "INCREASE":
            return { count: state.count + 1 };
        case "DECREASE":
            return { count: state.count - 1 };
        case "RESET":
            return { count: 0 };
        default:
            return state;
    }
};

const AppProvider = ({ children }) => {

    const intialState = { count: 0 };
    const [state, dispatch] = useReducer(counterReducer, intialState);

    const value = {
        state,
        dispatch
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider