import React from 'react'

const Cart = () => {
    return (
        <div>
            <div className="flex shadow-2xl container ml-8 mb-2 mt-1 mr-52">
                <img src="https://shorturl.at/IJLW3" alt="item" className='w-20 h-20' />
                <div className='ml-5'>
                <h1 className='text-2xl font-bold'>Name of Product</h1>
                <h5 className='font-light'>This is a small detail about the product.</h5>
                </div>
                <div className='ml-40 pt-5'>
                    $35.59
                </div>
                <button className='hover:bg-red-600 text-red-600 border-2 border-red-600 hover:text-white 
                pt-3 font-bold p-4 ml-3 h-12 mt-3 rounded-3xl'>Delete</button>
            </div>
        </div>
    )
}

export default Cart