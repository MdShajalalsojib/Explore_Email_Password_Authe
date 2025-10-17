import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase.init";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router";

const SinUp = () => {

  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword ] = useState(false);
  
    const [errorMessage, setErrorMessage] = useState('')

    const handleSignUp = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const terms = e.target.terms.checked;
        console.log(email,password, terms);

        setSuccess(false);

        setErrorMessage('');

        if(!terms){
          setErrorMessage('Please accept Out Terms and conditions');
          return;
        }

        //password validate 
        const passwordRegExp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/
        if(passwordRegExp.test(password) === false){
          setErrorMessage('Password must have one lowercase, one uppercase, one digit and 6 characters or LockManager.')

            return;
        }

        //create user
        createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
            console.log(result);
            setSuccess(true);
        })
        .catch(error =>{
            console.log(error);
            setErrorMessage(error.message)
        })
    }



  return (
    <div>
            <div className="card bg-gray-500 mx-auto mt-10 w-full max-w-sm shrink-0 shadow-2xl shadow-blue-300">
                 <h1 className="text-3xl font-bold p-5 text-center">SinUp</h1>
              <div className="card-body">
                <form onSubmit={handleSignUp}>
                  <label className="label">Email</label>
                  <input type="email" name="email" className="input" placeholder="Email" />
                  <label className="label mt-3">Password</label>
                  <div className="relative">
                     <input
                     type={showPassword ? 'text':'password'}
                    name="password"
                    className="input mt-4"
                    placeholder="Password"

                  />
                  <button 
                  onClick={() => {setShowPassword(!showPassword) }}
                  className="btn btn-xs absolute top-6 right-6">
                    {
                      showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                    }
                     </button>
                  </div>
                  <div className="mt-4">
                    <a className="link link-hover">Forgot password?</a>
                  </div>

                  <label className="label mt-5">
                   <input type="checkbox" name="terms"  className="checkbox" />
                         Accept Terms and Conditions
                    </label>
                    <br/>
                  <button className="btn btn-neutral mt-4 w-[320px]">SinUp</button>
                </form>
                  <p>Already have an account? Please <Link className="text-blue-400" to="/login">login</Link></p>

                {
                    errorMessage && <p className="text-red-400">{errorMessage}</p>
                }
                {
                  success && <p className="text-green-500">User has created successfully</p>
                }
              </div>
            </div>
          </div>
    
  );
};

export default SinUp;
