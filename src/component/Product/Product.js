import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    // console.log(props)
    const { name, img, seller, price, ratings } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <div className='sr-container'>
                    <p><small>Seller: {seller}</small></p>
                    <p><small>Ratings: {ratings}</small></p>
                </div>
            </div>
            <button onClick={() => props.eventHandler(props.product)} className='button-cart'>
                <p className='button-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;