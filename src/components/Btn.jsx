import React from 'react'

const Btn = ({Text}) => {
  return (
  <>
  <button className='bg-blue-500 shadow-3xl w-max
  text-md pl-2 pr-2 font-extrabold h-7 mt-1.5 
  hover:bg-blue-900 text-white rounded-md'>{Text}</button>
  </>
  )
}

export default Btn