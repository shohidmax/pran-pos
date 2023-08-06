import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SignUp = () => {
    const [displayName, setDisplayName] = useState(''); 
    const [updateProfile, updating] = useUpdateProfile(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); 
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handledisplayBlur = (event) => {
    setDisplayName(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordBlur = (event) => {
    setConfirmPassword(event.target.value);
  };

  const HandleSignup = async() =>{ 
    if (password && confirmPassword) {
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName });
    }
  }

  if (user) {
      navigate(from, { replace: true });
    }



  

    return (
        <div>
            <h1>Please Login</h1>
            <div className=' lg:w-3/4 mx-auto'>
            <div className="hero min-h-screen bg-base-000">
                  <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                      <h1 className="text-5xl font-bold">SignUp now!</h1>
                      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                      <div className="card-body">
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Name</span>
                          </label>
                          <input type="text" onChange={handledisplayBlur} placeholder="Your Name" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Email</span>
                          </label>
                          <input type="text" onChange={handleEmailBlur} placeholder="Email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Password</span>
                          </label>
                          <input type="password" onChange={handlePasswordBlur} placeholder="Password" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Password</span>
                          </label>
                          <input type="password" onChange={handleConfirmPasswordBlur} placeholder="Password" className="input input-bordered" required />
                          <label className="label">
                            <button href="#" className="label-text-alt link link-hover">Forgot password?</button>
                            <Link to='/login' className="label-text-alt btn-link link-hover">Signin</Link>
                          </label>
                        </div>
                        <div className="form-control mt-6">
                          <button onClick={HandleSignup} className="btn btn-primary">SignUp</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;