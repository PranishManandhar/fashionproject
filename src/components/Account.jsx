import React, { useState } from 'react';

const Account = () => {
  const [tab, setTab] = useState("personal");

  const personal = () => (
    <>
      <label className='text-xl'>Enter your Name: </label><br />
      <input type="text" placeholder='Name' required className='w-full border-b border-black mb-5' value="Rahl Shrestha" disabled /><br />
      <label className='text-xl'>Enter your email: </label><br />
      <input type="email" placeholder='Email' required className='w-full border-b border-black mb-5' value="rahl@gmail.com" disabled /><br />
      <label className='text-xl'>Enter your Date Of Birth: </label><br />
      <input type="date" placeholder='Date Of Birth' required className='w-full border-b border-black mb-5' /><br />
      <label className='text-xl'>Enter a Password: </label><br />
      <input type="Password" placeholder='Password' required className='w-full border-b border-black mb-5' value="sa3213d5as123@#" /><br />
      <label className='text-xl'>Enter the Password again: </label><br />
      <input type="Password" placeholder='Password' required className='w-full border-b border-black mb-5' value="sa3213d5as123@#" /><br />
      <button className='bg-blue-500 shadow-3xl w-full h-10 text-md mb-16 pl-2 pr-2 font-extrabold mt-1.5 hover:bg-blue-900 text-white rounded-md hover:scale-110'>Update Information</button>
    </>
  );

  const payment = () => (
    <>
      <h1 className='bg-blue-500 text-white font-bold text-lg p-2 mb-3 mr-4'>Add your payment Method</h1>

      <div className='flex flex-wrap'>
        <button className='bg-blue-500 p-3 text-white rounded-xl text-xl font-bold w-full sm:w-1/3 mb-2 sm:mr-2 hover:scale-105 hover:bg-blue-700' onClick={() => { window.location.href = ("http://www.paypal.com") }}>Paypal</button>
        <button className='bg-blue-500 p-3 text-white rounded-xl text-xl font-bold w-full sm:w-1/3 mb-2 sm:mr-2 hover:scale-105 hover:bg-blue-700' onClick={() => { window.location.href = ("http://www.esewa.com.np") }}>Esewa</button>
        <button className='bg-blue-500 p-3 text-white rounded-xl text-xl font-bold w-full sm:w-1/3 mb-2 sm:mr-2 hover:scale-105 hover:bg-blue-700' onClick={() => { window.location.href = ("https://khalti.com/") }}>Khalti</button>
        <button className='bg-blue-500 p-3 text-white rounded-xl text-xl font-bold w-full sm:w-1/3 mb-2 sm:mr-2 hover:scale-105 hover:bg-blue-700' onClick={() => { window.location.href = ("https://www.nrb.org.np/") }}>Visa</button>
        <button className='bg-blue-500 p-3 text-white rounded-xl text-xl font-bold w-full sm:w-1/3 mb-2 sm:mr-2 hover:scale-105 hover:bg-blue-700' onClick={() => { window.location.href = ("https://ebank.nepalbank.com.np/") }}>Net Banking</button>
      </div>
    </>
  );

  const deleteAccount = () => (
    <>
      <p>Delete Account</p>
    </>
  );

  const handleTab = (tab) => {
    setTab(tab);
  };

  const sidenav = () => (
    <>
      <button className={`w-full font-bold text-md ${tab === 'personal' ? 'hover:text-white focus:text-white focus:bg-blue-500 shadow-2xl bg-blue-500' : 'hover:text-white focus:text-white focus:bg-blue-500'} p-1 hover:bg-blue-500 hover:scale-105 rounded-md`} onClick={() => handleTab("personal")}>
        Personal details
      </button><br />

      <button className={`w-full font-bold text-md ${tab === 'payment' ? 'hover:text-white focus:text-white focus:bg-blue-500 shadow-2xl bg-blue-500' : 'hover:text-white focus:text-white focus:bg-blue-500'} p-1 hover:bg-blue-500 hover:scale-105 rounded-md mt-1`} onClick={() => handleTab("payment")}>
        Payment details
      </button><br />
      <button className={`w-full font-bold text-md ${tab === 'deleteAccount' ? 'hover:text-white focus:text-white focus:bg-blue-500 shadow-2xl bg-blue-500' : 'hover:text-white focus:text-white focus:bg-blue-500'} p-1 hover:bg-blue-500 hover:scale-105 rounded-md mt-1`} onClick={() => handleTab("deleteAccount")}>
        Delete Account
      </button>
    </>
  );

  return (
    <div className='flex'>
      <div className="w-1/4 h-full">
        {sidenav()}
      </div>
      <div className="container p-2">
        {tab === 'personal' && personal()}
        {tab === 'payment' && payment()}
        {tab === 'deleteAccount' && deleteAccount()}
      </div>
    </div>
  );
};

export default Account;
