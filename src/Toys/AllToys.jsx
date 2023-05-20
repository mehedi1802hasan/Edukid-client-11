import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const AllToys = () => {
  const toys = useLoaderData();
  const [showAll, setShowAll] = useState(false);

  // Slice the toys array to show only 20 items if showAll is false
  const displayedToys = showAll ? toys : toys.slice(0, 20);

  const handleSeeMore = () => {
    setShowAll(true);
  };

  return (
    <div className="overflow-x-auto">
      <table className="table w-11/12 mx-auto table-compact">
        <thead>
          <tr>
            <th></th>
            <th>Seller Name</th>
            <th>Toy Name</th>
            <th>Sub-Category</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {displayedToys.map((toy, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <td>{toy.sellerName ? toy.sellerName : "no name"}</td>
              <td>{toy.productName}</td>
              <td>{toy.subCategory}</td>
              <td>{toy.price}</td>
              <td>{toy.quantity}</td>
              <td className="btn btn-outline">View Details</td>
            </tr>
          ))}
        </tbody>
      </table>
      {!showAll && toys.length > 20 && (
        <div className="flex justify-center my-4">
          <button className="btn btn-warning" onClick={handleSeeMore}>
            See More
          </button>
        </div>
      )}
    </div>
  );
};

export default AllToys;
