import React from 'react';
import BankingServices from './components/BankingServices';
import BankingStatus from './components/BankingStatus';
import BankingContextProvider from './context/BankingContext';

function App() {
  return (
    <BankingContextProvider>
      <BankingStatus/>
      <BankingServices/>
    </BankingContextProvider>
  );
}

export default App;
