import React, { createContext, useReducer } from 'react';
import { bankingReducers } from '../reducers/bankingReducers';

export const BankingContext = createContext();

const BankingContextProvider = (props) => {
    const initialState = {
        balance: 0
    }

    const [state, dispatch] = useReducer(bankingReducers, initialState);

    return (
        <BankingContext.Provider value={{state, dispatch}}>
            {props.children}
        </BankingContext.Provider>
    )
};

export default BankingContextProvider;