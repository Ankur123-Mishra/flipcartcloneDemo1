// import React from "react";
import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
// import { NavLink } from 'react-router-dom';
// import { NavLink } from "react-router-dom";
import { NavLink } from "react-router-dom";
import './Electronic.css'

const Electronic = () => {
   const dispatch = useDispatch();
   const [product, setProduct] = useState([]);
   let [jwelItem, setJwelItem] = useState([]);
   let [menCloth, setMenCloth] = useState([]);
   let [ele, setele] = useState([]);
   let [womenCloth, setWomenCloth] = useState([]);
   const callItemApi = async () => {
      const datajson = await fetch('https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products');
      const data = await datajson.json();
      setProduct(data)
      console.log(data);
      function getjewelery() {
         let jwelcatogery = data.filter((item) => item.category === "jewelery");
         setJwelItem(jwelcatogery);
         return jwelcatogery;
      }
      function getmen() {
         let mencatogery = data.filter((item) => item.category === "men's clothing");
         setMenCloth(mencatogery);
         return mencatogery;

      }
      function getelectronics() {
         let electronicscatogery = data.filter((item) => item.category === "electronics");
         setele(electronicscatogery);
         return electronicscatogery;
      }
      function getwomen() {
         let womencatogery = data.filter((item) => item.category === "women's clothing");
         setWomenCloth(womencatogery);
         return womencatogery;
      }
      console.log(getjewelery());
      console.log(getmen());
      console.log(getelectronics());
      console.log(getwomen());

   }

   useEffect(() => {
      callItemApi();

   }, [])

   function handleAdd(product){
      
      // dispatch(add(product))
       dispatch({type:'cart/add', payload: product})
       console.log(product)
   }



//    function handleAdd(product){
//       // dispatch(add({product, count}))
//       dispatch({type:'cart/add', payload: product})
//       //  dispatch({type:'cart/add', payload: product})
//       //  console.log(add(product))
//    }
//    const count = useSelector((state)=> state.counter)
//    console.log(count)

//   //  const [quantity, setqunatity] = useState(1);

//    function handleIncrement(number){
//     dispatch(increment(number));
//     console.log(number)
//  }

//  function handleDecrement(number){
//      dispatch(decreament(number));
//      console.log(number)
//  }


//   //  function handleQuantity(e){
//   //   console.log(e.target.value)
//   //   setqunatity(e.target.value);
//   //  }
  


   return (
      <>

         <div className="Product_contener">
            <div className="Product_header_contener">
               <div className="Product_header">
                  <h1>Men's Clothing</h1>
                  {/* <p>Device And Accessories</p> */}
               </div>
               <button className="viewAll_btn">VIEW ALL</button>
            </div>

            <div className="Electronic_card_contener">
               {
                  menCloth.map((itemele, id) => {
                     return (
                        // <Link className='jewldivmain' to={`productdetailpage/${itemele.id}`}>
                        <NavLink className="Electronic_card_contener" to={`/Checkout/${itemele.id}`}>
                           <div className="card_product" key={id}>
                              <img className='itemsimage' src={itemele.image} alt="images" />
                              <h5 className="card_product_name">{itemele.title.substring(0,20)}</h5>
                              <p className="card_product_price">From₹{itemele.price}</p>
                              <button className="viewAll_btn"> Buy Now</button>
                           </div>
                        </NavLink>
                        // <Link/>
                     )
                  })
               }
            </div>
         </div>



         <div className="Product_contener">
            <div className="Product_header_contener">
               <div className="Product_header">
                  <h1>Women's Clothing</h1>
                  {/* <p>Device And Accessories</p> */}
               </div>
               <button className="viewAll_btn">VIEW ALL</button>
            </div>

            <div className="Electronic_card_contener">
               {
                  womenCloth.map((itemele, idele) => {
                     return (
                        <NavLink to={`/Checkout/${itemele.id}`}>
                           <div className="card_product">
                              <img className='itemsimage' src={itemele.image} alt="images" />
                              <h5 className="card_product_name">{itemele.title.substring(0,20)}</h5>
                              <p className="card_product_price">From₹{itemele.price}</p>
                              <button className="viewAll_btn"> Buy Now</button>
                           </div>
                        </NavLink>
                     )
                  })
               }
            </div>
         </div>

         <div className="Product_contener">
            <div className="Product_header_contener">
               <div className="Product_header">
                  <h1>Jewelery</h1>
                  {/* <p>Device And Accessories</p> */}
               </div>
               <button className="viewAll_btn">VIEW ALL</button>
            </div>

            <div className="Electronic_card_contener">
               {
                  jwelItem.map((itemele, idele) => {
                     return (
                        <NavLink to={`/Checkout/${itemele.id}`}>
                           <div className="card_product">
                              <img className='itemsimage' src={itemele.image} alt="images" />
                              <h5 className="card_product_name">{itemele.title.substring(0,20)}</h5>
                              <p className="card_product_price">From₹{itemele.price}</p>
                              <button className="viewAll_btn"> Buy Now</button>
                           </div>
                        </NavLink>
                     )
                  })
               }
            </div>
         </div>


         <div className="Product_contener">
            <div className="Product_header_contener">
               <div className="Product_header">
                  <h1>Best of Electronics</h1>
                  {/* <p>Device And Accessories</p> */}
               </div>
               <button className="viewAll_btn">VIEW ALL</button>
            </div>

            <div className="Electronic_card_contener">
               {
                  ele.map((itemele, idele) => {
                     return (
                        <NavLink to={`/Checkout/${itemele.id}`}>
                           <div className="card_product">
                              <img className='itemsimage' src={itemele.image} alt="images" />
                              <h5 className="card_product_name">{itemele.title.substring(0,20)}</h5>
                              <p className="card_product_price">From₹{itemele.price}</p>
                              <button className="viewAll_btn"> Buy Now</button>
                           </div>
                        </NavLink>
                     )
                  })
               }
            </div>
         </div>

      </>
   )
   

}
export default Electronic;

// ---------------------------------------------------------------------------------------------------------


