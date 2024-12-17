import React from 'react'

const Event = () => {
  return (
    <div className='border bg-white border-gray-200 p-2 rounded shadow border-t-[#C3EBFA] border-t-2'>
       <div className='flex flex-row  justify-between items-center'>
           <h4>Lorem ipsum dolor</h4>
           <p className='text-xs'>12:00PM<span>-</span>2:00PM</p>
       </div>
       <p>Lorem Ipsum</p>
    </div>
  )
}

export default Event
