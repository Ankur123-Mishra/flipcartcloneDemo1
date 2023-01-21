import React from 'react';
import './Footer.css'

function Footer() {
    const Scto = () =>{
        window.scrollTo(0,0);
    }
  return (
    <>
    <div className='Footer'>
    <a onClick={Scto}>
    <div className='FooterBottomToTop' >
    </div>
    </a>
      <div className='FooterVerRow' >
        <div className='"FooterVerCol' >
            <div className='FooterVerColHead' >Get To know Us</div>
            <ul>
                <li>About</li>
                <li>Services</li>
                <li>Flipkart Stories</li>
                <li>Gift Products</li>
            </ul>
        </div>

        <div className='"FooterVerCol' >
            <div className='FooterVerColHead' >Connect to us</div>
            <ul>
                <li>Youtube</li>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>Facebook</li>
            </ul>
        </div>

        <div className='"FooterVerCol' >
            <div className='FooterVerColHead' >Make Money</div>
            <ul>
                <li>Payment</li>
                <li>Become a Affiliated</li>
                <li>Sell on Flipkart</li>
                <li>Flipkart Wholesale</li>
            </ul>
        </div>

      </div>
      <hr/>
      <div className='FooterLast' >
      <span className='FooterMess' >
        Flipkart Clone © Newton School
        </span>
      </div>
    </div>
    </>
  )
}

export default Footer
