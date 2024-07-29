import React, { useState } from 'react'

const Todo6 = () => {

    const [task, setTask] = useState('')
    const [listData, setListData] = useState([])

    function addTask(){
        setListData([...listData,task])
        console.log(listData);
        setTask('')
    }

    function removeTask(index){
        const updateList = listData.filter((elm,id)=>{
            return index!=id
        })
        setListData(updateList)
    }

    function removeAll(){
        setListData([])
    }
   
  return (
   <>
    <h1>TODO LIST</h1>
    <input type="text" placeholder='Enter here task' value={task} onChange={(event) =>{
        setTask(event.target.value)
    }}/>

    <button onClick={addTask}>Add Task</button>

    <h1>HERE IS YOUR TASK :</h1>

    {listData!=[] && listData.map((data,index)=>{
        return(
            <>
                <p key={index}>
                <div> {data} </div>
                </p>

                <button onClick={() => removeTask(index)}>Remove</button>
            </>
        )
    })}
    
    {listData.length >= 1 &&  <button onClick={removeAll}>Remove All Task</button>}
 
   </>
  )
}

export default Todo6