import React from 'react';


const Banner = () => {

    return (
        <div >
            <div  className="min-h-screen hero"  style={{ backgroundImage: `url("https://images.pexels.com/photos/8294594/pexels-photo-8294594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")` }}>
  <div className="bg-opacity-70 hero-overlay"></div>
  <div className="text-center hero-content text-neutral-content">
    <div className="max-w-md ">
      <h1 className="mb-5 text-4xl font-bold text-pink-400">BEST TOYS EVER</h1>
      <p className="mb-5 text-2xl text-yellow-300">We make your children happier with the best toys.Unlocking imaginations and creating endless joy.</p>
    <button className='btn btn-active btn-accent'  >About Us</button>
    </div>
  </div>
</div>



        </div>
        
    );
};

export default Banner;