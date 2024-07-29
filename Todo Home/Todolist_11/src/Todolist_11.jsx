import React, { useState } from 'react'

const Todolist_11 = () => {

    const [todo, setTodo] = useState("")
    const [liData, setLiData] = useState([])

    function addTodo(){
        setLiData([...liData,todo])
        console.log(liData);
        setTodo("")
    }

    function removeTodo(index){
        const upList  = liData.filter((elem,id) =>{
            return index != id
        })
        setLiData(upList)
    }

    function removeTodoAll(){
        setLiData([])
    }
  return (
    <>
        <h1>TODO LIST</h1>
        <input type="text" placeholder='Enter here task' value={todo} onChange={(e) =>{
            setTodo(e.target.value)
        }}/>

        <button onClick={addTodo}>Add Todo</button>

        {liData != [] && liData.map((info,index) =>{
            return(
                <>
                
                    <div> {info} </div>
                    <p key={index}>
                    <button onClick={() => removeTodo(index)}>Remove</button>
                    </p>
                
                </>
            )
        })}

        {liData.length >= 1 &&  <button onClick={removeTodoAll}> Remove All</button> }
        
    </>
  )
}

export default Todolist_11