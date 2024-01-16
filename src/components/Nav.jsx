import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import Btn from './Btn';

const Nav = () => {
  return (
    <>
      <div className='w-full flex h-11'>
        <div className='w-1/2 flex bg-blue-600'>
          <h1 className='pl-5 font-medium text-3xl text-white'>
            Fashion Store
          </h1>
          <input type="text" className='h-7 rounded-lg mt-1.5 ml-5 w-72 text-xl pl-2 mr-2' placeholder='Search...' />
          <Btn Text="Search" className='mt-4' />
        </div>
        <div className='list-none flex bg-blue-600 w-1/2 px-14 pt-2'>
          <li className='px-8 font-medium text-xl text-white'><a href="http://www.youtube.com">Home</a></li>
          <li className='px-10 font-medium text-xl text-white'><a href="http://www.youtube.com/shorts">Products</a></li>
          <li className='px-10 font-medium text-xl text-white'><a href="http://www.youtube.com/@GaminglabPlayZ/podcasts">Contacts</a></li>
          <Popup trigger={
            <li className='px-10 font-medium text-xl text-white cursor-pointer'>Account</li>
          } modal nested>
            <div className='container bg-blue-500 shadow-2xl p-8 rounded-md'>
              <div className='text-white text-2xl font-semibold mb-4'>Options</div>
              <div className='text-white text-lg mb-4'>My Cart</div>
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
