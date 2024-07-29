import React, { useState } from 'react'

const Todo_9 = () => {

    const [work, setWork] = useState('')
    const [workList, setWorkList] = useState([])

    function addWork(){
        setWorkList([...workList,work])
        console.log(workList);
        setWork('')
    }

    function removeWork(i){
       const updateWork = workList.filter((elem,id) => {
        return i!=id
    })
       setWorkList(updateWork)
       
    }

    function removeAll(){
        setWorkList([])
    }

  return (
    
    <>
    <h1>TODO LIST</h1>
    <input type="text" placeholder='Enter Here Your Work' value={work} onChange={(e) =>{
        setWork(e.target.value)
    }}/>

    <button onClick={addWork}>Add Work</button>

    {workList!=[] && workList.map((data,i)=>{
        return(
            <>

                <div> {data} </div>    
                <p key={i}>
                    <button onClick={ () => removeWork(i)}>Delete</button>
                </p>  

                     
            </>
        )
    })}


    {workList.length >= 1 && <button onClick={removeAll}>Remove All</button>}
    </>
  )
}

export default Todo_9