import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { add, remove } from "../../store/cartSlice";
import { decreament, increment } from "../../store/quantitySlice";
import "./Checkout.css";
import Product from "../Product";

function Checkout() {
  // setqunatity(useSelector((state)=> state.counter))
  const dispatch = useDispatch();
  let id = window.location.pathname.split("/");
  console.log(id[1]);
  //  if(id[1] === "Checkout"){
  //     id = id[2];
  //   }else{
  //     id = id[3]
  //   }
  id = id[2];
  let [itm, setitm] = useState({});

  const param = useParams();
  console.log(param);

  useEffect(() => {
    let data = async () => {
      const datajson = await fetch(
        `https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products/${id}`
      );
      setitm(await datajson.json());
    };
    data();
  }, []);

  function handleAdd(product) {
    dispatch({ type: "cart/add", payload: product });
  }
  const count = useSelector((state) => state.counter);
  console.log(count);

function handleIncrement(number) {
    dispatch(increment(number));
    console.log(number);
  }

  function handleDecrement(number) {
    dispatch(decreament(number));
    console.log(number);
  }
  return (
    <>
      <div className="Checkout">
        <h1 className="CheckoutTag">Checkout </h1>
        <hr/>
        <div className="CheckoutContainer">
          <img className="ImageContainer" src={itm.image} alt="" />
          <div className="ContentContainer">
            <div className="ProductName">
              <h1>{itm.title}</h1>
              <p>Visit to store</p>
              {console.log(itm)}
              {/* <h4>Rating {itm.rating.rate}/5.0</h4> */}
              <h4>{itm.rating && itm.rating.rate}★</h4>
            </div>
            <div className="ProductPrice">
              <p>Special Sale</p>
              <h1>
                <span>$</span>
                {itm.price * count}
              </h1>
              <div className="ProdcutQuantity">
                <h3>Quantity</h3>
                <button
                  onClick={() => {
                    handleIncrement(1);
                  }}
                >
                  +
                </button>
                <button>{count}</button>
                <button
                  onClick={() => {
                    handleDecrement(1);
                  }}
                >
                  -
                </button>
              </div>
            </div>
            <div className="ProdcutDescription">
              <h3>About this Item</h3>
              <p>{itm.description}</p>
            </div>
          </div>

          <div className="BuyContainer">
           <i> <p>Free Delivery</p></i>
            <h3>In Stock</h3>
            <div className="buttonsContainer">
              {console.log()}
              <button className="addtocart" onClick={() => handleAdd(itm)}>
                Add to Cart
              </button>
              <br />
              <button className="buynow">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;

// -----------------------------------------------------------------------------------------

// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// // import { useSelector, use } from 'react-redux';
// import { useDispatch, useSelector } from 'react-redux';
// import { addCart } from '../redux/action';
// // import { useParams } from 'react-router-dom';
// import { add, remove } from '../store/cartSlice';
//  import './Productdetailpage.css';
// // import { Link } from 'react-router-dom';
// // import { set } from 'immer/dist/internal';
// // import ProductDetail from './ProductDetail';
// // import ActionItem from './ActionItem';

// function Productdetailpage() {
//     const dispatch = useDispatch();

//     let id = window.location.pathname.split("/");
//     id = id[2];
//     let [itm, setitm] = useState({});

//     const param = useParams();
//     useEffect(() => {
//         let data = async () => {
//             const datajson = await fetch(`https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products/${id}`);
//             setitm(await datajson.json());
//         }
//         data()
//     }, [])

//     function handleAdd(product, count) {
//         dispatch(add({ product, count }))
//       }
//     return (
//         <>
//             {/* <Link to='/Checkout'> */}
//             <div className='productdetailpage'>
//                 <section className='imagesandbutton'>
//                     <div className='imagediv'>
//                         <img className='productimage' src={itm.image} alt="" />
//                     </div>
//                 </section>
//                 <div className='detaildiv'>
//                     <h1 className='titledetail common'>{itm.title}</h1>
//                     <div className='ratingandcount common'>
//                         <div className='rating'>{itm.rating && itm.rating.rate}★</div>
//                         <div className='count'>{itm.rating && itm.rating.count}</div>
//                     </div>
//                     <div className='pricedetail common'>₹{itm.price}</div>
//                     <p className='descriptiondetail common'>{itm.description}</p>
//                     <button className='twobutton addtocart' onClick={()=>handleAdd(itm.id, 1)}>Add to cart</button>
//                     <button className='twobutton buynow'>Buy now</button>
//                 </div>
//             </div>
//             {/* </Link> */}
//         </>

//     )

//     // -----------------------------------------------------------------------------------

// }
// export default Productdetailpage
