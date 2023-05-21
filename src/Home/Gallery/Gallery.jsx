import React from 'react';
import Marquee from "react-fast-marquee";

const Galleray = () => {
    const images = [
        'https://images.pexels.com/photos/3933030/pexels-photo-3933030.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/8294594/pexels-photo-8294594.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/7750713/pexels-photo-7750713.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/7927183/pexels-photo-7927183.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/19677/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROtQV438a-_uDaMv0D5aGCL4lQjyT6awyjYw&usqp=CAU',
        'https://images.pexels.com/photos/7927183/pexels-photo-7927183.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpfWygtFpkQ1srtomDfzzhwAbMtQiDPRkH7g&usqp=CAU',
        
        'https://images.pexels.com/photos/12585860/pexels-photo-12585860.jpeg?auto=compress&cs=tinysrgb&w=600',
       
        // Add more image URLs here
      ];
    return (
        <div className='my-2 bg-slate-400 hover:bg-slate-600'> 
              
         
          


             <h3  className='p-12 text-3xl font-bold text-center'>Best <span className='text-red-600'>Selling</span> Products</h3>
            
             <div className="grid grid-cols-1 gap-4 p-5 md:grid-cols-3 ">
      <div className="col-span-2 border-2 border-blue-500">
        <img src={images[0]} alt="Big Image" className="w-full" />
      </div>
      <div className="grid grid-cols-2 col-span-1 gap-4 ">
        {images.slice(1).map((image, index) => (
          <img key={index} src={image} alt={`Image ${index + 2}`} className="w-full border-2 border-blue-500" />
        ))}
      </div>
    </div>
      </div>
    );
  };

export default Galleray;