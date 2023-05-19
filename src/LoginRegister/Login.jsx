import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Firebase/Provider';
import Swal from 'sweetalert2';
import { FaGoogle } from 'react-icons/fa';


const Login = () => {
  const {loginUser,user,googleLogin}=useContext(AuthContext)
    const handleLogin=event=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
       const Login={email,password};
       console.log(Login)
       loginUser(email,password)
        .then(result=>{
          const logined =result.user;
          console.log(logined)
          Swal.fire({
            title: 'Wow! Matching!!',
            text: 'Successfully Login done',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        })
        .catch(error=>{
         console.log(error) 
         Swal.fire({
          title: 'Sorry',
          text: 'YOur information is not correct!!Try again',
          icon: 'error',
          confirmButtonText: 'Cool'
        }) 
        }
        )
    }
    const handleGoogleLogin=()=>{
      googleLogin()
      .then(result=>{
        const loggedUser=result.user;
        console.log(loggedUser);
        Swal.fire({
          title: 'Wow!!',
          text: 'Successfully Login done',
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
    <div className="w-1/3 text-center lg:text-left">
      
      <img  src='https://www.naxeed.com/themes/default/images/login-img.png' alt="" />
    
    </div>
    <div className="flex-shrink-0 max-w-sm shadow-2xl wfull card bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <h3 className='text-3xl font-bold text-center text-blue-600'> Login</h3>
        <div className="form-control">
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
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="mt-6 form-control">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <button className="mx-auto mb-3 w-52 btn btn-warning hover:bg-orange-500" onClick={handleGoogleLogin}><FaGoogle/>Google</button>
    </div>
   
  </div>
</div>
        </div>
    );
};

export default Login;