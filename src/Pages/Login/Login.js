import React from 'react';
import loginImage from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';

const Login = () => {
    const handleLogin = event=>{
        event.preventdefault()
    }
    return (
        <div className="hero w-full my-20">
            <div className="hero-content gap-5 grid md:grid-cols-2 lg:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-3/4' src={loginImage} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <h1 className="text-5xl text-center font-bold">Login</h1>
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="SignUp" />
                        </div>
                    </form>
                    <p className='text-center'><small>Already have an account?<Link className=' text-orange-600 font-semibold ml-1' to='/'>Login</Link></small></p>
                </div>
            </div>
        </div>
    );
};

export default Login;