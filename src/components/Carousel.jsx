import React, { useState } from 'react'

const Carousel = () => {
  const images = ["https://shorturl.at/IJLW3", "https://shorturl.at/eTX36", "https://shorturl.at/drTZ5", "https://shorturl.at/mrJLZ", "https://shorturl.at/dqtDZ"];
  const [count, setcount] = useState(0);

  const next = () => {
    if (count === images.length - 1) {
      setcount(0);
    } else {
      setcount(count + 1);
    }
  }

  const prev = () => {
    if (count === 0) {
      setcount(images.length - 1);
    } else {
      setcount(count - 1);
    }
  }

  return (
    <div className="text-center pt-10 pb-10 -pl-1 font-sans overflow-hidden">
      <div className='relative mx-auto'>
        <img src={images[count]} alt="ClothTrends" className="w-3/5 ml-96 h-96 rounded-8 shadow-md" />
        <div className="mt-3 ml-52">
          <button id="prev" onClick={prev} className="bg-blue-500 text-white border-none px-5 py-3 mr-5 rounded-5 cursor-pointer text-lg">Previous</button>
          <button id="next" onClick={next} className="bg-blue-500 text-white border-none px-5 py-3 rounded-5 cursor-pointer text-lg">Next</button>
        </div>
      </div>
    </div>
  );

}

export default Carousel;