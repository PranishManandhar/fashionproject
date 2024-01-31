import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Authentication = () => {
  const [Tab, setTab] = useState('login');
  const [isLoggedin, setisLoggedin] = useState(false)
  const [email, setemail] = useState('login');
  const [loginPassword, setloginPassword] = useState('login');
  
  const navigate = useNavigate();

  const loginhandle = ()=>{
      if (email ==='uname'&&loginPassword ==='password') {
        navigate("/MyAccount");
      } else {
        alert('Invalid username or password');
      }
  }

    const signup = ()=>{
      return(
        <>
         <label className='text-xl'>Enter your Name: </label> <br />
            <input type="text" placeholder='Name' required className='w-full border-b border-black mb-5'/> <br />
            <label className='text-xl'>Enter your email: </label> <br />
            <input type="email" placeholder='Email' required className='w-full border-b border-black mb-5'/> <br />
            <label className='text-xl'>Enter your Date Of Birth: </label> <br />
            <input type="text" placeholder='Date Of Birth' required className='w-full border-b border-black mb-5'/> <br />
            <label className='text-xl'>Enter a Password: </label> <br />
            <input type="Password" placeholder='Password' required className='w-full border-b border-black mb-5'/> <br />
            <label className='text-xl'>Enter the Password again: </label> <br />
            <input type="Password" placeholder='Password' required className='w-full border-b border-black mb-5'/> <br />
            <button className='bg-blue-500 shadow-3xl w-full h-10 text-md pl-2 pr-2 font-extrabold mt-1.5 mb-5 hover:bg-blue-900 text-white rounded-md hover:scale-110'>SignUp</button>
        </>
      )    
    }
    
    const login = ()=>{
      return(
        <>
            <label className='text-xl'>Enter your email: </label> <br />
            <input type="email" placeholder='Email' className='w-full border-b border-black mb-5' onChange={(e)=>{setemail(e.target.value)}} /> <br />
            <label className='text-xl'>Enter your PassWord: </label> <br />
            <input type="password" placeholder='Password' className='w-full border-b border-black mb-5' onChange={(e)=>{setloginPassword(e.target.value)}}/> <br />
            <button className='bg-blue-500 mb-5 shadow-3xl w-full h-10 text-md pl-2 pr-2 font-extrabold mt-1.5  hover:bg-blue-900 text-white rounded-md hover:scale-110' onClick={loginhandle} type='submit'>Login</button>
        </>
      )
    }

    const handleTab = (tab)=>{
      setTab(tab);

    }

  return (
    <div>
    <div>
        <div className="flex">
        <button onClick={()=>handleTab('signup')} className='bg-blue-500 shadow-3xl w-full h-10
            text-md pl-2 pr-2 font-extrabold mt-1.5 
             active:bg-blue-700 focus:bg-blue-700 text-white rounded-md'>Signup</button> <br />

        <button onClick={()=>handleTab('login')} className='bg-blue-500 shadow-3xl w-full h-10
            text-md pl-2 pr-2 font-extrabold mt-1.5 
             text-white active:bg-blue-700 focus:bg-blue-700 rounded-md'>Login</button> <br />
        </div>
      <div>
      {Tab === 'signup'&&signup()}
        {Tab === 'login'&&login()}
      </div>

    </div>
    </div>
  )
}

export default Authentication