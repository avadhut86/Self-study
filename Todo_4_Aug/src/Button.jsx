import React from 'react'

const Button = () => {

    function addTask(){
        setListData([...listData,todo])
        console.log(listData);
        setTodo("")
    }
  return (
    <button className='myBtn' onClick={addTask}>&#43;</button>
  )
}

export default Button