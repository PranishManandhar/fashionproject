import React, { useContext } from 'react';
import cartContext from '../context/cart/Cartcontext';

const Cart = () => {
    const product = useContext(cartContext);

    return (
        <div className="flex shadow-2xl container ml-8 mb-2 mt-1 mr-52">
            <img src="https://shorturl.at/IJLW3" alt="item" className='w-20 h-20' />
            <div className='ml-5'>
                <h1 className='text-2xl font-bold'>{product.Name}</h1>
                <h5 className='font-light'>{product.Detail}</h5>
            </div>
            <div className='ml-40 pt-5'>
                ${product.Price}
            </div>
            <button className='hover:bg-red-600 text-red-600 border-2 border-red-600 hover:text-white 
                pt-3 font-bold p-4 ml-3 h-12 mt-3 rounded-3xl'>Delete</button>
        </div>
    );
}

export default Cart;
