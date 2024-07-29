import React, { useState } from 'react'

const Todolist_2 = () => {

    const[task,setTask] =useState('')
    const[lidata,setLidata] = useState([])
    function addActivity(){
      setLidata([...lidata,task])
      console.log(lidata);
      setTask('')
      
    }

    function removeActvity(index){
      const updateliData = lidata.filter((elem,id) => {
        return index!=id
      })
      setLidata(updateliData)
    }

    function removeAll(){
      setLidata([])
    }
  return (
   <>
    <h1>TODO LIST</h1>
    <input type="text" placeholder='Enter here your Activity' value={task} onChange={(e) => setTask(e.target.value)}/>

    <button onClick={addActivity}>Add Event</button>

    <p>HERE IS YOUR LIST : {")"}</p>

    {lidata!=[] && lidata.map((data,index)=>{
      return(
        <>
          <p key={index}>
            <div> {data} </div>
            
            <div className='btn'> <button onClick={ ()=> removeActvity(index)}>Delete</button></div>
           
          </p>
        </>
      )
    })}

    {lidata.length >= 1 &&  <button onClick={removeAll}>Remove All </button>}
    
   </>
  )
}

export default Todolist_2