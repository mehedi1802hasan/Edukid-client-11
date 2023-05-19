import React from 'react';
import Marquee from "react-fast-marquee";

const Sponser = () => {
    const icons = [
        'https://cdn-icons-png.flaticon.com/128/300/300221.png',
        'https://cdn-icons-png.flaticon.com/128/0/747.png',
        'https://cdn-icons-png.flaticon.com/128/882/882749.png',
        'https://cdn-icons-png.flaticon.com/128/882/882747.png',
        'https://cdn-icons-png.flaticon.com/128/6528/6528793.png',
        'https://cdn-icons-png.flaticon.com/128/5968/5968927.png',
        'https://cdn-icons-png.flaticon.com/128/732/732221.png',
        'https://cdn-icons-png.flaticon.com/128/882/882740.png',
        'https://cdn-icons-png.flaticon.com/128/882/882711.png',
        'https://cdn-icons-png.flaticon.com/128/882/882722.png',
        'https://cdn-icons-png.flaticon.com/128/220/220214.png',
        'https://cdn-icons-png.flaticon.com/128/5977/5977590.png',
        'https://cdn-icons-png.flaticon.com/128/10096/10096351.png'
        // Add more image URLs here
      ];
    return (
        <div className='my-4 '> 
              
         
          


             <h3 className='text-3xl font-bold text-center my-7'>Our Sponser</h3>
             <Marquee speed={140}>
                
             <div className="flex gap-4 px-10 mb-7">
  {icons.map((icon, i) => (
    <img
      key={i}
      src={icon}
      className="object-cover p-3 transition duration-300 border border-black rounded-full hover:border-black hover:border-4 h-28 w-28"
    />
  ))}
</div>



</Marquee>
      </div>
    );
  };

export default Sponser;