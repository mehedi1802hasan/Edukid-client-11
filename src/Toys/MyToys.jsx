import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Firebase/Provider';
import Swal from 'sweetalert2';

import UpdateToysModal from './UpdateToysModal';
import MyToyDetails from './MyToyDetails';
const Mytoys = () => {
    const {user}=useContext(AuthContext)
    const [myToys,setMyToys]=useState([])
    useEffect(()=>{
   fetch(`http://localhost:5000/myToys/${user?.email}`)
   .then(res=>res.json())
   .then(data=>
    {setMyToys(data);
     console.log(data);
    
   });
   console.log(myToys)
},[user])
const handleDelete=_id=>{
  console.log(_id);
  const procced=confirm('Are you sure you want to delete')
  if(procced){
  fetch(`http://localhost:5000/myToys/:email/${_id}`,{
    method:"DELETE",
  }).then(res=>res.json())
  .then(data=>
   { 
    console.log(data)
    if(data.deletedCount>0){
      Swal.fire({
        title: 'Wow',
        text: 'Deleted successfully ',
        icon: 'success',
        confirmButtonText: 'Ok'
      }) 
    } 
  })
}
}

    return (
        <div className="overflow-x-auto ">
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
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
            myToys.map((myToy, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{myToy.sellerName ? myToy.sellerName : "no name"}</td>
                <td>{myToy.productName}</td>
                <td>{myToy.subCategory}</td>
                <td>{myToy.price}</td>
                <td>{myToy.quantity}</td>
               <td>
                <MyToyDetails
                myToy={myToy}
                index={index}
                ></MyToyDetails>
             
               </td>
               <td>
              
             
<UpdateToysModal
  key={myToy._id}
  myToy={myToy}
 
/>
{/* The button to open modal */}


              

               </td>
               <td><button onClick={()=>handleDelete(myToy._id)} className='btn btn-outline btn-error'>X</button></td>
              </tr>
            ))}
          </tbody>
        </table>
       
      </div>
    );
};

export default Mytoys;