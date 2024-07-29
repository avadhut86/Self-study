import React, { useState } from 'react'

const Todo_8 = () => {
    
    const [todo, setTodo] = useState('')
    const [listData, setListData] = useState([])

    function addTodo(){
        setListData([...listData,todo])
        console.log(listData);
        setTodo('')
    }

    function cancel(index){
        const newList = listData.filter((elm,id)=>{
            return index!=id
        })
        setListData(newList)
    }

    function removeAll(){
        setListData([])
    }
  return (
    <>
    <h1>TODO LIST</h1>
    <input type="text"  placeholder='Entere your todo' value={todo} onChange={(e) =>{
        setTodo(e.target.value)
    }}/>

    <button onClick={addTodo}>Add</button>

    {listData!=[] && listData.map((info,index)=>{
        return(
            <>
            <div> {info} </div>
            <p key = {index}>
                <button onClick={ () => cancel(index)}>Delete</button>
            </p>
            </>
        )
    })}

    {
        listData.length >= 1 &&   <button onClick={removeAll}>Remove All Task</button>
    }
   
    </>
  )
}

export default Todo_8