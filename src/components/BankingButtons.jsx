import React, { useContext } from 'react';
import { BankingContext } from '../context/BankingContext';

const BankingButtons = ({status, setStatus}) => {

    const { dispatch } = useContext(BankingContext);

    const handleDeposit = (amount) => {
        return {
            type: 'DEPOSIT',
            amount: parseInt(amount)
        }
    };
    const handleWithdraw = (amount) => {
        return {
            type: 'WITHDRAW',
            amount: parseInt(amount)
        }
    };
    const collectInterest = () => ({
        type: 'COLLECT_INTEREST'
    });
    const deleteAccount = () => ({
        type: 'DELETE_ACCOUNT'
    });

    return (
        <div className="btn-group" role="group" aria-label="Basic example">
            <button disabled={!status} onClick={() => dispatch(handleDeposit(status), setStatus(''))} type="button" className="btn btn-primary">Deposit</button>
            <button disabled={!status} onClick={() => dispatch(handleWithdraw(status), setStatus(''))} type="button" className="btn btn-info">Withdraw</button>
            <button onClick={() => dispatch(collectInterest())} type="button" className="btn btn-warning">Collect Interest</button>
            <button onClick={() => dispatch(deleteAccount())} type="button" className="btn btn-danger">Delete Account</button>
        </div>
    )
}

export default BankingButtons;
