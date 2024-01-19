import React from 'react'

const Contacts = () => {
  return (
    <div>
        <div className="container block shadow-xl p-20 m-5 text-lg">
            <label className='text-xl'>Enter your Name: </label> <br />
            <input type="text" placeholder='Name' className='w-full border-b border-black mb-5'/> <br />
            <label className='text-xl'>Enter your email: </label> <br />
            <input type="email" placeholder='Email' className='w-full border-b border-black mb-5'/> <br />
            <label className='text-xl'>Enter your Message: </label> <br />
            <input type="email" placeholder='Message' className='w-full border-b border-black mb-5'/> <br />

            <button className='bg-blue-500 shadow-3xl w-full h-10
            text-md pl-2 pr-2 font-extrabold mt-1.5 
            hover:bg-blue-900 text-white rounded-md hover:scale-110'>Mail To Us</button>
        </div>
    </div>
  )
}

export default Contacts