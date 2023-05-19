import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
      <div >
       <footer className="p-10 rounded footer footer-center bg-sky-200 text-base-content">
  <div className="grid grid-flow-col gap-4">
    <Link to="/" className="link link-hover">About us</Link> 
    <Link to="/" className="link link-hover">Contact</Link> 
    <Link to="/" className="link link-hover">Jobs</Link> 
    <Link to="/" className="link link-hover">refund-policy</Link>
    <Link to="/" className="link link-hover">Map</Link> 
    <Link to="/" className="link link-hover">Address</Link>
  </div> 
  <div>
    <div className="grid grid-flow-col gap-4">
    <Link className='w-10' to="/"><img  src='https://img.icons8.com/?size=1x&id=uLWV5A9vXIPu&format=png' alt="" /></Link> 
    <Link className='w-10' to="/"><img  src='https://img.icons8.com/?size=1x&id=19318&format=png' alt="" /></Link> 
      <Link className='w-10' to="/"><img  src='https://img.icons8.com/?size=512&id=13963&format=png' alt="" /></Link> 
      <Link className='w-10' to="/"><img  src='https://img.icons8.com/?size=1x&id=xuvGCOXi8Wyg&format=png' alt="" /></Link> 

    </div>
  </div> 
  <div>
  <p class="flex items-center">
  <span class="mr-2">#Copyright © 2023 - All right reserved by</span>
  <img class="h-6 w-6 rounded-full border border-gray-500" src="https://cdn-icons-png.flaticon.com/512/10741/10741405.png" alt="" />
  <span class="ml-2">EduKid Ltd</span>
</p>

  </div>
</footer>
      </div>
    );
};

export default Footer;