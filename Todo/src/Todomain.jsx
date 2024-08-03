import React, { useEffect, useState } from 'react'
import Todoadd from './Todoadd'
import RemoveBtn from './RemoveBtn'
import RemoveAll from './RemoveAll'

const Todomain = () => {

    const [todo, setTodo] = useState("")
    const [listData, setListData] = useState(() => {
        const localData = localStorage.getItem("Items") 
        if (localData === null) {
            return []
        }
        else 
        {
            return JSON.parse(localData)
        }
    })
    useEffect( () => {
        localStorage.setItem("test", JSON.stringify(listData))
    }, [listData])

    function addTask(){
        setListData([...listData,todo])
        console.log(listData);
        setTodo("")
    }

    function removeTask(index){
        const updateList = listData.filter((elem,id) => {
            return index != id
        })
        setListData(updateList)
    }

    function removeAll(){
        setListData([])
    }
  return (
   <>
   <div className='container'>
    <div className='card'>
        <p className='para'>Date : Saturday, 10:00 am 2024</p>
        <hr />
        
        <p className='para1'>task 1</p>
   {/* <h1>Todo List</h1> */}
   {/* <input className='text' type="text" placeholder='Enter here your Task' value={todo} onChange={(e) => {
    setTodo(e.target.value)
   }}/> */}

   <Todoadd toAdd = {addTask} />

   {listData != [] && listData.map((data,index) =>{
    return (

        <>
        <div> {data} </div>
         <p key={index}>
            
           <RemoveBtn deleteTask = {removeTask} key1 ={index} /> 
         </p>

        </>
    )
   })}

   <RemoveAll Data = {listData} all = {removeAll} />

   <p className='finish'>Finish</p>
   
   </div>

   <div className='card-1'>
        <input type="date" />
   </div>
   </div>
   
   </>
  )
}

export default Todomain