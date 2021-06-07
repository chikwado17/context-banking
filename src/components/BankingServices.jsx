import React from 'react';
import BankingButtons from './BankingButtons';

const BankingServices = () => {
    return (
        <div className="container">
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1"><b>Enter Amount</b></label>
                    <input type="text" className="form-control" />
                </div>
                   <BankingButtons/>
            </form>
        </div>
    )
}

export default BankingServices;
