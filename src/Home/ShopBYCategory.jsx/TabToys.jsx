import React from 'react';
import { Link } from 'react-router-dom';
const TabToys = ({ toy }) => {
  const { productName, imgUrl, price, rating, _id } = toy;

  return (
    <div>
      <div className="shadow-xl card w-96 bg-base-100">
        <figure className="px-10 pt-10">
          <img src={imgUrl} alt="Shoes" className="h-28 rounded-xl" />
        </figure>
        <div className="items-center text-center card-body">
          <h2 className="card-title">{productName}</h2>
          <p>{price}</p>
          <p>{rating}</p>

          <div className="card-actions">
            <Link to={`/tabtoydetails/${_id}`}><button  className="btn btn-primary">View Details</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabToys;
