import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="min-h-screen hero" style={{ backgroundImage: `url("https://images.pexels.com/photos/15415360/pexels-photo-15415360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="text-center hero-content text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-4xl font-bold text-yellow-500">BEST TOYS EVER</h1>
      <p className="mb-5 text-yellow-100">We make your children happier with the best toys</p>
    <button>About Us</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;