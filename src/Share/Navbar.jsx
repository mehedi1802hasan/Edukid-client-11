import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Firebase/Provider';
const Navbar = () => {
  const {user, logOut,loading}=useContext(AuthContext);

  const handleLogout=()=>{
    logOut()
    .then(()=>{})
    .catch(error=>{
      console.log(error.message)
    })
  }
    return (
        <div className=" navbar bg-sky-200">
        <div className="navbar-start">
          <div className=" dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/alltoys'>All Toys</Link></li>
            <li><Link to='/blogs'>Blogs</Link></li>
           {
            user && 
           <>
            <li><Link to='/mytoys'>My Toys</Link></li>
            <li><Link to='/addtoys'>Added Toys</Link></li>
           </>
           }
            
            </ul>
          </div>
        <h3 className='text-4xl font-bold'><span className='text-red-500'>E</span><span className='text-blue-500'>du</span><span className='text-red-500'>k</span><span className='text-blue-500'>id</span></h3>
        </div>
        <div className="hidden navbar-center lg:flex">
          <ul className="px-1 menu menu-horizontal">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/alltoys'>All Toys</Link></li>
            <li><Link to='/blogs'>Blogs</Link></li>
            
            </ul>
        </div>
          {
            user &&
            <div className="hidden navbar-center lg:flex">
            <ul className="px-1 menu menu-horizontal">
            
           
              <li><Link to='/mytoys'>My Toys</Link></li>
              <li><Link to='/addtoys'>Added Toys</Link></li>
              
            </ul>
          </div> 
         
          
          }
            
            
            
            
            
            
       
        <div className="navbar-end">
          
         {
          user ? 
          <div className=" lg:flex">
          <ul className="px-1 menu menu-horizontal">
          <li>
  <img
    src={user.photoURL || 'https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp'}
    alt=""
    class="w-20 h-20 rounded"
    title={user?.displayName || "name not found"}
  />
</li>


          <li><button onClick={handleLogout}><Link >LogOut</Link></button></li>   
          </ul>
        </div>
           : 
           <div className=" lg:flex">
           <ul className="px-1 menu menu-horizontal">
             <li><Link to='/login'>Login</Link></li>
             <li><Link to='/registration'>Registration</Link></li>
           </ul>
         </div>
         }
          
        </div>
      </div>
    );
};

export default Navbar;