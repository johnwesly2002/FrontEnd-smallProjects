import React, { useCallback, useEffect, useMemo, useState } from 'react';
import './SimpleCartProject.css';
const SimpleCartProject = () => {
    const[products,setProducts] = useState([]);
    const[cart, setCart] = useState([]);
    const[totalCart,setTotalCart] = useState(0);
    useEffect(() => {
        fetch('https://dummyjson.com/products')
        .then((resp) => resp.json())
        .then((res) => {
            setProducts(res?.products);
            console.log(res);
        })
        .catch((error) => console.log(error))
    },[]);
    const handleAddtoCart = (itm) => {
        setCart((prev) => {
            const updateCart = [...prev, itm];
            updateTotalPrice(updateCart);
            return updateCart;
        });
    }
    const handleRemoveCart = (itm) => {
        setCart(() => {
            console.log("cart",cart);
            const updateCart = cart.filter((val) => val != itm);
            updateTotalPrice(updateCart);
            return updateCart;
        });
    }
    const updateTotalPrice =  useCallback((cartData) => {
        console.log("hello",cartData)
        setTotalCart(cartData.reduce((sum,it) => (sum + it.price), 0));
    },[cart])
    return (
        <div className='mainContainer'>
        <span className='headingText'>Cart Page</span>
        <div className='CartContainer'>
        <div className='products'>
        {products.map((itm,index) => (
            <div className='productContent' key={index}>
            <img src={itm.images[0]} height={40} width={40}/>
            <span className='Producttitle'>{itm.title}</span>
            <button className='AddtoCart' onClick={() => handleAddtoCart(itm)}>Add to Cart</button>
            </div>
        ))}
        </div>
        <div className='cart'>
        <span className='cartHeader'>Cart</span>
        <div className='cartProductsSection'>
        {cart.length > 0 ? (cart.map((itm,index) => (
            <div className='cartproducts' key={index}>
            <img src={itm.images[0]} height={25} width={25}/>
            <span className='Producttitle'>{itm.title}</span>
            <button className='cartRemove' onClick={() => handleRemoveCart(itm)}>Remove</button>
            </div>
        ))) : 
        <div className='cartNoProducts'>
        <span className='headingText'>No Products in Cart</span>
        </div>
        }
        </div>
        <div className='cartPricingSection'>
        <span>Total Price</span>
        <span>${totalCart}</span>
        </div>
        </div>
        </div>
        </div>
    );
}

export default SimpleCartProject;
