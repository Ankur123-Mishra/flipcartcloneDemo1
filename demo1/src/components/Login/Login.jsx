import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import './Login.css'
import { Link } from 'react-router-dom';

function Login() {
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
                // console.log("login")
            }
            // if (input.email !== ele.email || input.password !== ele.password) {
            //     alert("wrong email or password");
            // }
        })


        // localStorage.setItem("user", JSON.stringify(input));
        // navigate("/");
    };
  return (
    <>
        <div className='Login' >
            <Link to="/" >
                <img  className='LoginLogo' src='https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Flipkart_logo.svg/1280px-Flipkart_logo.svg.png' alt='' />
            </Link>
            <div  className='LoginContainer' >
                <h1>Login</h1>
                <form>
                    <h3>Email</h3>
                    <input type="email" placeholder='Your Email' required onChange={(e) => setInput({...input, [e.target.name]: e.target.value,})}></input>
                    <h3 >Password</h3>
                    <input type="password" placeholder='Your Password' required onChange={(e) => setInput({...input, [e.target.name]: e.target.value,})}  ></input>
                    <button className='LoginButton' >Sign In</button>
                </form>
                <p>By continuing, you agree to Flipkart's conditons of Use Privacy</p>
                <Link to="/Signup" className='headerLink' >
                <button className='LoginButton' >Create Your Flipkart Account</button>
                </Link>
                
            </div>
        </div>
    </>
  )
}

export default Login
