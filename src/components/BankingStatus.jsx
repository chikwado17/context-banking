import React, { useContext } from 'react';
import { BankingContext } from '../context/BankingContext';

const BankingStatus = () => {

    const { state } = useContext(BankingContext);

    return (
        <div className="jumbotron">
            <h1>{`Account Balance: ${state.balance}`}</h1>
        </div>
    )
}

export default BankingStatus;
