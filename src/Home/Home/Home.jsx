import React from 'react';
import Banner from '../Banner/Banner';

import Galleray from '../Gallery/Gallery';
import Sponser from '../ExtraSection/Sponser';
import ShopTab from '../ShopBYCategory.jsx/ShopTab';


const Home = () => {
    return (
        <div >
        <Banner></Banner>
      <Galleray></Galleray>
      <ShopTab></ShopTab> 
      <Sponser></Sponser>
        </div>
    );
};

export default Home;
