import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItems.css'

const ReviewItem = (props) => {
    const { handleRemoveProduct, product } = props;
    const { name, img, price, shipping, quantity } = product;
    return (
        <div className='border-2 border-solid p-4 m-4 flex'>
            <div>
                <img className='w-36' src={img} alt="" />
            </div>
            <div className='text-container'>
                <div>
                    <p title={name}>
                        {name.length > 20 ? name.slice(0, 15) + '...' : name}
                    </p>
                    <p>Price: <span>{price}</span></p>
                    <p>Shipping: <small>{shipping}</small></p>
                    <p>Quantity: {quantity}</p>
                </div>
                <div className='flex items-center'>
                    <button onClick={() => handleRemoveProduct(product)} className='bg-amber-400 p-4 rounded-full cursor-pointer'>
                        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;