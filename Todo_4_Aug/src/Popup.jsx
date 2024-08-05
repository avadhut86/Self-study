import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import dayjs from 'dayjs'
import React from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { X } from 'lucide-react';

const Popup = ({onClose}) => {
  return (
    

    <div className='card2-container'>
       <button onClick={onClose} className='closeBtn'><X size={31}/></button> 
    <div className='card-2'>
    
    {/* <p className='para2'>Date : Monday, 10:00 am 2024</p> */}
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker  value={dayjs('2024-08-04T08:31:18.462Z')} onChange={(e) => setselectDate(e.$d.toISOString())
      }/>
    </LocalizationProvider>
    <hr />
     
     <div className='child'>
    <input className='input' type="text"  placeholder='Please Enter Your Task Here' />
    </div>
    
    <button className='addtask'>ADD TASK</button>
</div>
</div>
  ) 
}

export default Popup