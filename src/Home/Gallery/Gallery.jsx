import React from 'react';
import Marquee from "react-fast-marquee";

const Galleray = () => {
    const images = [
        'https://images.pexels.com/photos/7927183/pexels-photo-7927183.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/7927183/pexels-photo-7927183.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/7927183/pexels-photo-7927183.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/7927183/pexels-photo-7927183.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/7927183/pexels-photo-7927183.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/7927183/pexels-photo-7927183.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/7927183/pexels-photo-7927183.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/7927183/pexels-photo-7927183.jpeg?auto=compress&cs=tinysrgb&w=600',
        
        
        'https://images.pexels.com/photos/7105814/pexels-photo-7105814.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/7105806/pexels-photo-7105806.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/7927183/pexels-photo-7927183.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/7927183/pexels-photo-7927183.jpeg?auto=compress&cs=tinysrgb&w=600'
        // Add more image URLs here
      ];
    return (
        <div className='my-2 bg-slate-400'> 
              
         
          


             <h3 className='p-12 text-3xl font-bold text-center'>Best <span className='text-red-600'>Selling</span> Products</h3>
             <Marquee speed={170}>
      <div className="flex gap-4 px-10 ">
        {images.map((image, i) => (
          <img
            key={i}
            src={image}
        
            className="object-cover w-full h-full border-2 border-yellow-600 border-solid"
          />
        ))}
      </div></Marquee>
      </div>
    );
  };

export default Galleray;