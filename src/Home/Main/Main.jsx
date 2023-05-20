import React from 'react';
import Navbar from '../../Share/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../../Share/Footer';

const Main = () => {
    return (
        <div>
          <Navbar></Navbar>
          <div className=''>
            <Outlet></Outlet>
          </div>
          <Footer></Footer>  
        </div>
    );
};

export default Main;