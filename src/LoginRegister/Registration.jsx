import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Firebase/Provider';
import Swal from 'sweetalert2'

const Registration = () => {
  const {signUpUser,user}=useContext(AuthContext);
    const handleRegistration=event=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value;
        const imgUrl=form.imgUrl.value;
       const registration={name,email,password,imgUrl};
       console.log(registration)
       signUpUser(email,password)
       .then(result=>{
        const signUped=result.user;
        console.log(signUped)
        Swal.fire({
          title: 'GOOD!',
          text: 'Congratulations.Successfully Registration completed!!',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
       })
       .catch(error=>{
        console.log(error.message)
       })
    }
    return (
        <div>
          <div className="min-h-screen hero bg-base-200">
  <div className="flex-col hero-content lg:flex-row">
    <div className="w-1/2 text-center lg:text-left">
      
      <img  src='https://crm.easytrax.com.bd/client/client_registration/new/images/cover-img.png' alt="" />
    
    </div>
    <div className="flex-shrink-0 w-full max-w-sm shadow-2xl card bg-base-100">
      <form onSubmit={handleRegistration} className="card-body">
      <h3 className='text-3xl font-bold text-center'> Registration</h3>
        <div className="form-control">
        <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="please enter your name" className="input input-bordered" required />
       
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email"placeholder="please enter email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="please enter your password" className="input input-bordered" required/>
          <label className="label">
            <span className="label-text">Img URL</span>
          </label>
          <input type="text" name='imgUrl' placeholder="please enter image url" className="input input-bordered" />
        </div>
        <div className="mt-6 form-control">
          <button className="btn btn-warning hover:bg-orange-500">Registration</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Registration;