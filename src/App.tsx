import React, { useState } from 'react';
import Modal from 'react-modal';
import { GlobalStyle } from "./assets/styles/global"
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from '../src/hooks/useTransactions';

Modal.setAppElement('#root')

export function App() {

  const [isNewTransacionModalOpen, setIsTransactionModalOpen] = useState(false);

  
  function handleOpenNewTransacionModal() {
      setIsTransactionModalOpen(true);
  }

  function handleCloseNewTransacionModal() {
      setIsTransactionModalOpen(false)
  }
  return (
    <TransactionsProvider>
      <Header onOpenNewTrasactionModal={handleOpenNewTransacionModal} />
        <Dashboard/>

        <NewTransactionModal 
          isOpen={isNewTransacionModalOpen}
          onRequestClose={handleCloseNewTransacionModal}
        />

      <GlobalStyle />
    </TransactionsProvider>
  );
}

