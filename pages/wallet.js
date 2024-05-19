// pages/wallet.js
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import CurrencyWallet from '../components/CurrencyWallet';
import { getWalletBalance } from '../utils/api';

const Wallet = () => {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const userId = 1; // Replace with dynamic user ID
    getWalletBalance(userId).then(balance => setBalance(balance));
  }, []);

  return (
    <Layout>
      <CurrencyWallet balance={balance} />
    </Layout>
  );
};

export default Wallet;
