import React from 'react';

const BankingButtons = () => {
    return (
        <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-primary">Deposit</button>
            <button type="button" className="btn btn-info">Withdraw</button>
            <button type="button" className="btn btn-warning">Collect Interest</button>
            <button type="button" className="btn btn-danger">Delete Account</button>
        </div>
    )
}

export default BankingButtons;
