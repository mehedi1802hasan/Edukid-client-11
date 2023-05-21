import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch('http://localhost:5000/addToys')
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  const displayedToys = showAll ? toys : toys.slice(0, 20);

  const handleSeeMore = () => {
    setShowAll(true);
  };

  const handleSearch = () => {
    fetch(`http://localhost:5000/toySearch/${searchText}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  };

  return (
    <div className="overflow-x-auto">
      <div className="my-4 text-center ">
        <input
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
          className="p-2"
        />
        <button className='ml-1 btn btn-outline' onClick={handleSearch}>Search</button>
      </div>

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
              <td>{toy.sellerName ? toy.sellerName : 'no name'}</td>
              <td>{toy.productName}</td>
              <td>{toy.subCategory}</td>
              <td>{toy.price}</td>
              <td>{toy.quantity}</td>
              <td>
                <Link to={`/allToysDetails/${toy._id}`}>
                  <button className="btn btn-primary">View Details</button>
                </Link>
              </td>
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
