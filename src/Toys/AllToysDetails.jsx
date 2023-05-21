import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AllToysDetails = () => {
    const loader=useLoaderData()
    const {imgUrl,productName,price,description,sellerName,rating,quantity}=loader;
    return (
        <div>
            <div className='flex justify-center my-5'>
<div className="shadow-xl card w-96 bg-base-100">
  <figure className="px-10 pt-10">
    <img src={imgUrl} alt="img" className="rounded-xl" />
  </figure>
  <div className="items-center text-center card-body">
    <h2 className="text-red-600 card-title">Name: {productName}</h2>
  
    <b>sellerName: {sellerName}</b>
    <b>Price: {price}</b>
    <b>rating: {rating}</b>
    <b>quantity: {quantity}</b>
    <p>Description: {description}</p>
    
  </div>
</div>

    </div>
        </div>
    );
};

export default AllToysDetails;