import React, { useState } from 'react'
import Popup from './Popup'

const Button = () => {

  const [showPopup, setShowPopup] = useState(false)

//   function addTask(){
//     setListData([...listData,todo])
//     console.log(listData);
//     setTodo("")
// }
  return (
    <>
    <button className='myBtn' onClick={ () => {setShowPopup(true)}}>&#43;</button>
    { showPopup &&  <Popup onClose = {() =>{setShowPopup(false)}} />}
    </>
  )
}

export default Button