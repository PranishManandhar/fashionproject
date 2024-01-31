import React, { useContext,useState } from 'react';
import cartContext from '../context/cart/Cartcontext';

const Cart = () => {
    const product = useContext(cartContext);

    const [cartitems, setcartitems] = useState(0);

    const add = ()=>{
        setcartitems(cartitems+1)
    }
    const remove = ()=>{
        if (cartitems ===0) {
            setcartitems(0)
        }
        else{
            setcartitems(cartitems-1)
        }
    }

    return (
        <div className="flex shadow-2xl container ml-8 mb-2 mt-1 mr-52">
            <img src="https://shorturl.at/IJLW3" alt="item" className='w-20 h-20' />
            <div className='ml-5'>
                <h1 className='text-2xl font-bold'>{product.Name}</h1>
                <h5 className='font-light'>{product.Detail}</h5>
            </div>

            <button className='bg-blue-500 shadow-3xl w-40
                    text-md pl-2 pr-2 font-extrabold h-10 mt-3 ml-20 
                hover:bg-blue-900 hover:scale-105 text-white' onClick={remove}>Remove</button>

                       <span className='pl-8 font-bold mt-3 text-lg'>{cartitems} </span>
                       
                        <button className='bg-blue-500 shadow-3xl w-40
                    text-md pl-2 pr-2 font-extrabold h-10 mt-3 ml-10 
                hover:bg-blue-900 hover:scale-105 text-white' onClick={add}>Add</button>

            <div className='ml-40 pt-5'>
                ${product.Price}
            </div>
            <button className='hover:bg-red-600 text-red-600 border-2 border-red-600 hover:text-white 
                pt-3 font-bold p-4 ml-3 h-12 mt-3 rounded-3xl'>Delete</button>
        </div>
    );
}

export default Cart;
