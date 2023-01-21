import React from 'react'
import { Link } from 'react-router-dom'
import './Profile.css';
function Profile() {
  return (
    <>
       <div className='Profile' >
       <Link to="/" >
                <img  className='ProfileLogo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt='' />
            </Link>
{/*Profile */}
            <div className='ProfileContainer' >
                <h3>Your Profile</h3>
                <input type='text' placeholder='Enter your Name'  required></input>
                <h3>Email</h3>
                <input type='email' placeholder='Enter your Email'  required></input>
                <h3>Mobile</h3>
                <input type='number' placeholder='Enter your Mobile number'  required></input>
                <button className='ProfileButton' >Update Profile</button>
            </div>

       </div>
    </>
  )
}

export default Profile
