import React from 'react';
import Popup from 'reactjs-popup';
import Btn from './Btn';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <>
      <div className='w-full flex h-11'>
        <div className='w-1/2 flex bg-blue-600'>
          <h1 className='pl-5 font-medium text-3xl text-white'>
            <Link to="/">Fashion Store</Link>
          </h1>
          <input type="text" className='h-7 rounded-lg mt-1.5 ml-5 w-72 text-xl pl-2 mr-2' placeholder='Search...' />
          <Btn Text="Search" className='mt-4' />
        </div>
        <div className='list-none flex bg-blue-600 w-1/2 px-14 pt-2'>
          <li className='px-8 font-medium text-xl text-white'><Link to="/">Home</Link></li>
          <li className='px-10 font-medium text-xl text-white'><Link to="/products">Products</Link></li>
          <li className='px-10 font-medium text-xl text-white'><Link to="/contact">Contacts</Link></li>
          <Popup trigger={
            <li className='px-10 font-medium text-xl text-white cursor-pointer'>Account</li>
          } modal nested>
            <div className='container bg-blue-500 shadow-2xl p-8 rounded-md'>
              <div className='text-white text-2xl font-semibold mb-4'>Options</div>
              <div className='text-white text-lg mb-4'> <Link to="/cart">My Cart</Link> </div>
              <div className='text-white text-lg mb-4'>Personal Detail</div>
              <div className='text-white text-lg mb-4'>Settings</div>
              <div className='text-white text-lg mb-4'>Logout</div>
            </div>
          </Popup>
        </div>
      </div>
    </>
  );
};

export default Nav;
