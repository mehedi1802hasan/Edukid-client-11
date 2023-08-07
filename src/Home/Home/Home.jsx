import React from 'react';
import Banner from '../Banner/Banner';

import Galleray from '../Gallery/Gallery';
import Sponser from '../ExtraSection/Sponser';
import ShopTab from '../ShopBYCategory.jsx/ShopTab';
import Subscription from '../ExtraSection/Subscription';
import ClientFeedBack from '../ClientFeedBack/ClientFeedBack';


const Home = () => {
    return (
        <div >
        <Banner></Banner>
      <Galleray></Galleray>
      <ShopTab></ShopTab> 
      <Sponser></Sponser>
      <ClientFeedBack></ClientFeedBack>
      <Subscription></Subscription>
        </div>
    );
};

export default Home;
