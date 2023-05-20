import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Firebase/Provider';
import Swal from 'sweetalert2';
const UpdateToysModal = ({ myToy }) => {
    const {user}=useContext(AuthContext)

const handleAddToy=event=>{
    event.preventDefault();
    
    const form=event.target;
    const productName=form.productName.value;
    const sellerName=form.sellerName.value;
    const sellerEmail=form.sellerEmail.value;
    const imgUrl=form.imgUrl.value;
    const price=form.price.value;
    const rating=form.rating.value;
    const quantity=form.quantity.value;
    const subCategory=form.subCategory.value;
    const description=form.description.value;
    const _id=form._id.value;
    const addToy={
        productName,sellerName,sellerEmail,imgUrl,price,rating,quantity,_id,subCategory,description
    }
    console.log(addToy)
    fetch(`http://localhost:5000/updateToy/${_id}`,{
        method:"PUT",
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(addToy)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
      if(data.modifiedCount>0){
        Swal.fire({
            title: 'Well-done!!',
            text: 'Updated  successfully ',
            icon: 'success',
            confirmButtonText: 'Okay'
          }) 
      }
    })


}
    return (
        <div>
             <a href={`#my-modal-${myToy._id}`} className="btn">Update</a>
      <div className="modal" id={`my-modal-${myToy._id}`}>
  <div className="modal-box">
    
    
  <form onSubmit={handleAddToy} className=" card-body">
      <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
        <div className="form-control">
       <label className="label">
            <span className="label-text">Product-Name</span>
          </label>
          <input type="text" name='productName' placeholder="Enter your Product name" className="input input-bordered" />
        </div>
        <div className="form-control">
       <label className="label">
            <span className="label-text">Seller Name</span>
          </label>
          <input type="text" name='sellerName' placeholder="Enter Seller Name" className="input input-bordered" defaultValue={user?.displayName} />
        </div>
        <div className="form-control">
       <label className="label">
            <span className="label-text">Seller Email</span>
          </label>
          <input type="text" name="sellerEmail" placeholder="Enter seller email" className="input input-bordered" defaultValue={user?.email}/>
        </div>
        
        <div className="form-control">
       <label className="label">
            <span className="label-text">ImageURL</span>
          </label>
          <input type="text" name="imgUrl" placeholder="Enter product image url" className="input input-bordered" />
        </div>
        <div className="form-control">
       <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="text" name='price' placeholder="enter product price" className="input input-bordered" defaultValue="$"/>
        </div>
        <div className="form-control">
       <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <input type="text" name='rating' placeholder="Enter product ratings" className="input input-bordered" />
        </div>
        
        <div className=" form-control">
       <label className="label">
            <span className="label-text">id</span>
          </label>
          <input type="text" name='_id' defaultValue={myToy._id} className="input input-bordered" />
        </div>
        
        <div className="form-control">
       <label className="label">
            <span className="label-text">Quantity</span>
          </label>
          <input type="number" placeholder='enter product quantity' name='quantity'  className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Sub-Category</span>
          </label>
          <select name='subCategory' className='h-12'>
  <option value="science">Science Toy</option>
  <option value="math">Math Toy</option>
  <option value="english">English Toy</option>
 
</select>
         
        </div>
        
        <div className="form-control">
       <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input type="text" name="description" placeholder="Enter product description" className="input input-bordered" />
        </div>
        
        </div>
        <div className="mt-6 form-control">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    
    
   
    <div className="modal-action">
     <a href="#" className="btn">Close</a>
    </div>
  </div>
  </div>
        </div>
    );
};

export default UpdateToysModal;