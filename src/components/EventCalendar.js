import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
const EventCalendar = () => {
    const [value, onChange] = useState(new Date());
    console.log(window.innerWidth);
    
  return (
    <div className='bg-white md:w-64 2xl:w-96 ml-4 rounded'>
    <Calendar onChange={onChange} value={value} />
  </div>
  )
}

export default EventCalendar
