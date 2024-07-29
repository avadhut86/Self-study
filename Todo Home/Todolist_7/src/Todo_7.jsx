import React, { useState } from 'react'

const Todo_7 = () => {
    
    const [task, setTask] = useState('')
    const [liData, setLiData] = useState([])

    function addTask(){
        setLiData([...liData,task])
        console.log(liData);
        setTask('')
    }

    function removeTask(index){
        const updataeList = liData.filter((element,id) =>{
            return index!=id
           
        })
        setLiData(updataeList)
    }
 
    function removeAll(){
        setLiData([])
    }
    return (
        <>
        <h1>TODO LIST</h1>
        <input type="text" placeholder='Entere your task' value={task} onChange={(e) =>{
            setTask(e.target.value)
        }}/>

        <button onClick={addTask}>Add</button>

        {liData!=[] && liData.map((data,index)=>{
            return(
                <>
                
                    <div> {data} </div>
                    <p key={index}> 
                    <button className='btn' onClick={ () => removeTask(index)}>Remove</button>
                    </p>
                </>
            )
        })}

        {liData.length >= 1 &&    <button onClick={removeAll}>Remove All Task</button>  }
       
        
        </>
  )
}

export default Todo_7