import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const TabToyDetails = () => {
  const [toy, setToy] = useState(null);
  const loaderData = useLoaderData();

  useEffect(() => {
    setToy(loaderData);
  }, [loaderData]);

  if (!toy) {
    return <div>Loading...</div>;
  }

  const { productName, imgUrl, price,description } = toy;

  return (
    <div className='flex justify-center my-5'>
<div className="shadow-xl card w-96 bg-base-100">
  <figure className="px-10 pt-10">
    <img src={imgUrl} alt="img" className="rounded-xl" />
  </figure>
  <div className="items-center text-center card-body">
    <h2 className="text-red-500 card-title">Name: {productName}</h2>
    <b>Price: {price}</b>
    <p>Description: {description}</p>
    
  </div>
</div>

    </div>
  );
};

export default TabToyDetails;
