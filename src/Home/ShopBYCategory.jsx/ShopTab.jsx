import React, { useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TabToys from './TabToys';

const ShopTab = () => {
  const [toys, setToys] = useState([]);
  const [activeTab, setActiveTab] = useState('science');

  useEffect(() => {
    fetch('https://edukids-server.vercel.app/addToys')
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, []);

  const result = toys.filter((toy) => toy.subCategory === activeTab);
  const filteredToys = result.length > 0 ? result : toys;

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className='my-10 text-center'>
      <Tabs>
      <h3 className='my-5 text-3xl font-bold'>Shop by category</h3>
        <TabList>
          <Tab onClick={() => handleTabClick('science')}>Science</Tab>
          <Tab onClick={() => handleTabClick('math')}>Math Toys</Tab>
          <Tab onClick={() => handleTabClick('english')}>English Toys</Tab>
        </TabList>
        
        <TabPanel>
          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3'>
            {filteredToys.map((toy) => (
              <TabToys toy={toy} key={toy._id} />
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3'>
            {filteredToys.map((toy) => (
              <TabToys toy={toy} key={toy._id} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3'>
            {filteredToys.map((toy) => (
              <TabToys toy={toy} key={toy._id} />
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopTab;
