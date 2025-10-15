import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase.init";

const SinUp = () => {

    const [errorMessage, setErrorMessage] = useState('')

    const handleSignUp = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password);

        setErrorMessage('');

        //create user
        createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
            console.log(result);
        })
        .catch(error =>{
            console.log(error);
            setErrorMessage(error.message)
        })
    }



  return (
    <div>
            <div className="card bg-base-100 mx-auto mt-10 w-full max-w-sm shrink-0 shadow-2xl">
                 <h1 className="text-3xl font-bold p-5 text-center">SinUp</h1>
              <div className="card-body">
                <form onSubmit={handleSignUp}>
                  <label className="label">Email</label>
                  <input type="email" name="email" className="input" placeholder="Email" />
                  <label className="label">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="input mt-4"
                    placeholder="Password"
                  />
                  <div>
                    <a className="link link-hover">Forgot password?</a>
                  </div>
                  <button className="btn btn-neutral mt-4 w-[320px]">SinUp</button>
                </form>
                {
                    errorMessage && <p className="text-red-400">{errorMessage}</p>
                }
              </div>
            </div>
          </div>
    
  );
};

export default SinUp;
