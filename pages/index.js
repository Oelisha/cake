// pages/index.js
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import CakeItem from '../components/CakeItem';
import { getCakes } from '../utils/api';

const Home = () => {
  const [cakes, setCakes] = useState([]);

  useEffect(() => {
    getCakes().then(data => setCakes(data));
  }, []);

  return (
    <Layout>
      <h1>Welcome to the Cake Store</h1>
      <div className="cake-list">
        {cakes.map(cake => <CakeItem key={cake.id} cake={cake} />)}
      </div>
    </Layout>
  );
};

export default Home;
