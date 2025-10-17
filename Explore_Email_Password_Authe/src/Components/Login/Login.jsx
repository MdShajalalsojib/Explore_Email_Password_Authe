import React from 'react';

const Login = () => {
    return (
        <div className='mt-10'>             
                  <div className="card bg-gray-500 w-full max-w-sm mx-auto shrink-0 shadow-2xl shadow-blue-400  ">
                    <div className="card-body ">
                        <h1 className="text-3xl font-bold text-center">Login now!</h1>
                      <form>
                        <label className="label mb-3">Email</label>
                        <input type="email" className="input" placeholder="Email" />
                        <label className="label mt-4 mb-3">Password</label>
                        <input type="password" className="input" placeholder="Password" />
                        <div className='mt-4'><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4 w-full">Login</button>
                      </form>
                    </div>
                  </div>
                </div>
              
    );
};

export default Login;