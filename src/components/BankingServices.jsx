import React, { useState } from 'react';
import BankingButtons from './BankingButtons';

const BankingServices = () => {
    const [status, setStatus] = useState(''); 
    return (
        <div className="container">
            <form>
                <div className="form-group">
                    <label><b>Enter Amount </b></label>
                    <input value={status} onChange={(e) => setStatus(e.target.value)} type="text" className="form-control" />
                </div>
                   <BankingButtons status={status} setStatus={setStatus}/>
            </form>
        </div>
    )
}

export default BankingServices;
