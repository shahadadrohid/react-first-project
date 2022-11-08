import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../Hooks/useProducts';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0)

    useEffect(() => {
        fetch('http://localhost:5000/productCount')
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                const pages = Math.ceil(count / 10);
                setPageCount(pages)
            })
    }, [])

    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];

        for (const id in storedCart) {
            const addedProduct = products.find(product => product._id === id)

            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
                console.log(savedCart);
            }
        }
        setCart(savedCart);
    }, [products])

    const eventHandler = (selectedProduct) => {
        let newCart
        const exists = cart.find(product => product._id === selectedProduct._id);
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct]
        }
        else {
            const rest = cart.filter(product => product._id !== selectedProduct._id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists]
        }
        setCart(newCart);
        addToDb(selectedProduct._id)
    }
    return (
        <div className='shop-container'>
            <div className='flex justify-center'>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5'>
                    {
                        products.map(product => <Product key={product._id}
                            product={product} eventHandler={eventHandler}
                        ></Product>)
                    }
                    <div className="pagination">
                        {
                            [...Array(pageCount).keys()].map(number => <button
                                className={page === number ? 'selected' : ''}
                                onClick={() => setPage(number)}
                            >{number}</button>)
                        }
                    </div>
                </div>
            </div>
            <div className='cart-container'>
                <Cart cart={cart}>
                    <Link to="/shipping">
                        <button className='border-1 bg-white py-1 px-4 rounded-md'>Shipping</button></Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;