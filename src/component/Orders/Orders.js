import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../Review/ReviewItem';

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart();
    const navigate = useNavigate()

    const handleRemoveProduct = product => {
        const restProduct = cart.filter(pd => pd._id !== product._id);
        setCart(restProduct)
        removeFromDb(product._id)
    }

    return (
        <div className='shop-container'>
            <div className=''>
                {
                    cart.map(product => <ReviewItem
                        key={product._id}
                        product={product}
                        handleRemoveProduct={handleRemoveProduct}
                    ></ReviewItem>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}>
                    <Link to="/shipping">
                        <button className='border-1 bg-white py-1 px-4 rounded-md'>Shipping</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;