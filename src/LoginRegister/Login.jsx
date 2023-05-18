import React from 'react';

const Login = () => {
    const handleLogin=event=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
       const Login={email,password};
       console.log(Login)
        
    }
    return (
        <div>
          <div className="min-h-screen hero bg-base-200">
  <div className="flex-col hero-content lg:flex-row">
    <div className="w-1/2 text-center lg:text-left">
      
      <img  src='https://www.naxeed.com/themes/default/images/login-img.png' alt="" />
    
    </div>
    <div className="flex-shrink-0 w-full max-w-sm shadow-2xl card bg-base-100">
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
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;