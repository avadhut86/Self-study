import React, { useState } from 'react'

const Todo_5 = () => {

  const [todo, setTodo] = useState("")
  const [liData, setLiData] = useState([])

  function addTodo(){
    setLiData([...liData,todo])
    console.log(liData);
    setTodo('')
  }

  function removeTodo(index){
    const upList = liData.filter((elm,id) =>{
      return index!=id
    })
    setLiData(upList)
  }

  function removeAll(){
    setLiData([])
  }
  return (
    
    <>
    <h1>TODO LIST</h1>
    <input type="text" placeholder='Enter here todo' value={todo} onChange={(e) =>{
      setTodo(e.target.value)
    }}/>

    <button onClick={addTodo}>Add</button>  
    
    {liData.length>0 && liData.map((data,index) =>{
      return(
        <>
          <p key={index}>
              <div>{data}</div>
              <button onClick={()=> removeTodo(index)}>Remove</button>
          </p>

        </>
      )
    })}

    {liData.length >= 1 &&  <button onClick={removeAll}>Remove All</button>}
   
    </>
  )
}

export default Todo_5