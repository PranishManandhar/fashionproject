import React from 'react';
import {Link} from 'react-router-dom';

const Card = ({Name,price}) => {
  return (
    <div>
      <div className=' w-fit bg-blue-400 h-64 pb-3 rounded-xl m-4 shadow-lg text-white shadow-zinc-400'>
        <img src="https://shorturl.at/flmI2" alt="Product_1" className='w-48 h-40 object-cover rounded-xl' />
        
        <p className='text-xl text-center font-medium'>{Name}</p>
        
        <p className='w-48 pl-2 pr-1 text-justify'>${price}</p>
        <Link to="/products/id=">
        <button className='bg-blue-500 shadow-3xl w-full
  text-md pl-2 pr-2 font-extrabold h-8 mt-2 
  hover:bg-blue-900 text-white rounded-lg'>View Item</button></Link>
      </div>
    </div>
  );
}

export default Card;
