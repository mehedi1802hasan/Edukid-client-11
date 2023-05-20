import React from 'react';

const MyToyDetails = ({myToy,index}) => {
    const { productName,sellerEmail,imgUrl,price,rating,quantity,description,_id}=myToy
    return (
        <div>
            {/* The button to open modal */}
<label htmlFor={`my-modal-${index}`} className="btn">open modal</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id={`my-modal-${index}`} className="modal-toggle" />
<div className="modal">
  <div className="relative grid grid-cols-2 gap-3 modal-box">
   <img src={imgUrl} alt="" />
   <div>
   <label htmlFor={`my-modal-${index}`} className="absolute btn btn-sm btn-circle right-2 top-2">✕</label>
    <h3 className="overflow-y-auto text-lg font-bold whitespace-normal max-h-auto"> {productName}</h3>
    <p className="py-4 overflow-y-auto whitespace-normal max-h-auto">Email:{sellerEmail}</p>
    <p className="py-4 overflow-y-auto whitespace-normal max-h-auto">Price:{price}</p>
    <p className="py-4 overflow-y-auto whitespace-normal max-h-auto">rating:{rating}</p>
    <p className="py-4 overflow-y-auto whitespace-normal max-h-auto">quantity:{quantity}</p>
    <p className="py-4 overflow-y-auto whitespace-normal max-h-auto">Description{description}</p>
   
   </div>
  </div>
</div>
        </div>
    );
};

export default MyToyDetails;