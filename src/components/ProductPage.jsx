import React from 'react'
import {useState} from 'react'
import Card from './Card'

const ProductPage = () => {
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
        <div>
            <div className='flex'>
                <img src="https://shorturl.at/flmI2" className='w-96 h-2/4 ' alt="Productimage" />

                <div>
                    <h1 className='ml-20 font-semibold text-4xl mt-3 w-2/4 '>Royal Blue kurtha Suruwal set with treeleaf pattern</h1>
                    <div className='ml-20 font-thin text-lg text-justify mt-5 w-3/4 h-40 container shadow-2xl p-2'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse enim natus quas,
                        non doloribus reiciendis qui nemo laborum sint accusantium eligendi, earum, ratione
                        magnam ab facilis corrupti! Provident debitis error quasi voluptatem, voluptatum id
                        architecto perspiciatis amet non fugiat totam?
                    </div>
                        <button className='bg-blue-500 shadow-3xl w-40
                    text-md pl-2 pr-2 font-extrabold h-10 mt-8 ml-20 
                hover:bg-blue-900 hover:scale-105 text-white' onClick={remove}>Remove</button>

                       <span className='pl-8 font-bold text-lg'> No of items: {cartitems} </span>
                       
                        <button className='bg-blue-500 shadow-3xl w-40
                    text-md pl-2 pr-2 font-extrabold h-10 mt-8 ml-10 
                hover:bg-blue-900 hover:scale-105 text-white' onClick={add}>Add</button>
                
                <br />
                    <button className='bg-blue-500 shadow-3xl w-40
                    text-md pl-2 pr-2 font-extrabold h-10 mt-8 ml-20 
                hover:bg-blue-900 hover:scale-105 text-white '>Add To Cart</button>
                </div>

            </div>
            <div>
            <h1 className='pl-5 p-2 bg-blue-600 text-3xl mt-3 ml-5 text-white w-52 font-bold'>Suggestions</h1>
            <div className='w-screen overflow-scroll flex flex-row'>
                <Card Name={"product1"} price={46.65}/>
                <Card Name={"product2"} price={36.65}/>
                <Card Name={"product3"} price={26.65}/>
                <Card Name={"product4"} price={16.65}/>
                <Card Name={"product5"} price={16.65}/>
                <Card Name={"product6"} price={16.65}/>
                <Card Name={"product6"} price={16.65}/>
    </div>
            </div>
        </div>
    )
}

export default ProductPage