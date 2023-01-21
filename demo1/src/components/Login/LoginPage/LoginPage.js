import React from "react";
import { useState } from 'react';
import { useNavigate } from 'react-router';
import './LoginPage.css'
import { Link } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        email: "",
        password: ""
    });
    const handlelogin=(e) => {
        e.preventDefault();
        const loggeduser = JSON.parse( localStorage.getItem("loginDetails"));
        console.log(loggeduser);
        
        loggeduser.filter((ele, id) => {
            if(input.email === ele.email && input.password === ele.password) {
                navigate("/");
            } 
        })
    };
    return (
        <div className="container">
            <div className="left">
                <h1 className="heading">Login</h1>
                <p className="heading_discrip">Get access to your Orders, Wishlist and Recommendations</p>
            </div>
            <div className="right">
                <form>

                <div className="input_group">
                    <input className="input" type='text' required={true} onChange={(e) => setInput({...input, [e.target.name]: e.target.value,})} placeholder="--" />
                    <label className="label">Enter Email/Mobile number</label>
                    <div className="line"></div>
                </div>
                <div className="input_group">
                    <input className="input" type='password' required={true} onChange={(e) => setInput({...input, [e.target.name]: e.target.value,})} placeholder="--" />
                    <label className="label">Enter Password</label>
                    <div className="line"></div>
                    <a href="" className="link">Forget?</a>
                </div>
                <p className="para">By continuing, you agree to Flipkart's <a href="">Terms of Use</a> and <a href="">Privacy Policy</a>.
                </p>
                <Link to={"/"}>
                <button type="submit" className="btn" onClick={()=>{
                      if(input.value<=0)
                      {
                        alert("Enter  required field");
                      }
                }}>Login</button>
                </Link>
                <p className="para para--OR">OR</p>
                <button type="submit" className="btn btn--white">Request OTP</button>
                <Link to={"/Signup"}>
                <div className="bottom">
                    <a href="" className="link link--bottom">New to Flipkart? Create an account</a>
                </div>
                </Link>
                </form>
            </div>
        </div>
    )
}
export default LoginPage;