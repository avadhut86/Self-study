import React , { useState } from 'react'

const Todolist_3 = () => {

    const [todo, setTodo] = useState('')
    const [listdata, setListData] = useState([])

    function addTodo(){
        setListData([...listdata,todo])
        console.log(listdata);
        setTodo('')
    }

    function removeTodo(index){
        const updateTodo = listdata.filter((e,id) => {
            return index!=id
        })
        setListData(updateTodo)
    }

    function allTodo(){
        setListData([])
    }
  return (
    <>
    <h1>TODO LIST</h1>
    <input type="text" placeholder='Enter here task' value={todo} onChange={(e) =>{
        setTodo(e.target.value)
    }}/>

    <button onClick={addTodo}>Add</button>
    <h2>Here is your TODO-LIST</h2>

    {listdata!=[] && listdata.map((data,index)=>{
        return(
            <>
                <p key={index}>
                    <div>{data}</div>
                    <button onClick={ ()=> removeTodo(index)}>Remove</button>
                </p>            
            </>
        )
    })}

    {listdata.length >= 1 && <button onClick={allTodo}>Remove All Todo</button> }
    
    </>
  )

}

export default Todolist_3