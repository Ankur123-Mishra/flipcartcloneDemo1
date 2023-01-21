import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import {add} from '../store/cartSlice'
import './Product.css';
import Checkout from './Checkout/Checkout';
import { Link } from 'react-router-dom';


function Product() {
    const dispatch = useDispatch();
    const [products, setProduct] = useState([])

    async function getProductData() {
        const Api = await fetch("https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products");
        const data = await Api.json();
        console.log(data)

        setProduct(data)
    }
    useEffect(() => {
        getProductData()
    }, [])

    function handleAdd(product){
      
       // dispatch(add(product))
        dispatch({type:'cart/add', payload: product})
        console.log(product)
    }


    return (
        <>
      
       
        <div className='productsWrapper'>
        
        {products.map((product, id)=>{
            
            
            return(
                <Link to={`Checkout/${product.id} `} >  
            <div className= "Products"  key={id}>
            {console.log(id)}
            <img src={product.image} />
           
            <div className='ProductInformation' >
             <h4>{product.title}</h4>
              
                {/* <p>{product.description}</p> */}
                <div className='ProdcutsGroup'  >
                <p className='ProductPrice' >
                <small>$</small>
              <strong >{product.price}</strong>
               </p>
                {/* For the rating*/}
            <div className='ProductRating' >
            <p>{product.rating.rate}/5.0</p>
            </div>
                <p>{product.category}</p>
                </div>
                </div>
                
                {/* <button className='btn' onClick={()=>handleAdd(product)} >Add to cart</button> */}
            </div>
            </Link>
            )
          
        })}
        
            
        </div>
        

      

        </>
        
    )
}

export default Product;
