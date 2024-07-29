import React, { useState } from 'react'

const Todo4 = () => {

    const [activity,setActvity] = useState('')
    const [listData,setListData] = useState([])

    function addTodo(){
        setListData([...listData,activity])
        console.log(listData);
        setActvity('')
    }

    function removeList(index){
        
        const updateList = listData.filter((elem,id)=>{
            return index!=id
        })
        setListData(updateList)
    }

    function allList(){
        setListData([])
    }
  return (
    <>
        <h1>TODO LIST</h1>
        <input type="text" placeholder='Enter here the task' value={activity} onChange={(e) =>{
            setActvity(e.target.value)
        }}/>

        <button onClick={addTodo}>Add</button>

        <h1>HERE IS YOUR YOUR LIST : {")"} </h1>

        
        {/* To show the list below TODO yaa Task */}
        {listData!=[] && listData.map((data ,index) =>{
            return(
                <>
                    <p key = {index}>
                        <div> {data}</div> 
                        <button onClick={() => removeList(index)}>Remove</button>
                    </p>
                </>
            )
       
        })}

        {listData.length >=1 && <button onClick={allList}>Remove all</button>}
        
    </>
  )
}

export default Todo4