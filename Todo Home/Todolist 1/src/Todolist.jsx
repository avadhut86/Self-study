import React, { useState } from 'react'
import List from './List'

const Todolist = () => {
   const[activity,setActivity]=useState("")
   const [listData, setListData] = useState([])

   function addActivity(){
    setListData([...listData,activity]) //Asynchronous way it will take time to show activiy in console
    console.log(listData);
    setActivity('')
   }

   function removeActivity(index){
    const updateListData =listData.filter((elem,id) => {
        return index!=id;
    })
    setListData(updateListData)

   }

   function removeAll(){
   setListData([])
   }
  return (
    <>
    <div className='container'>
        <div className='header'>TODO LIST</div>
        <input type="text" placeholder='Enter here activity' value={activity} onChange={(e) =>setActivity(e.target.value)}/>
        <button onClick={addActivity}>Add</button>

        <p className='List-heading'>Here Is Your List : {")"} </p>

        <List aarayOfData={listData} remove={removeActivity} />
        {listData.length >=1 &&  <button onClick={removeAll}>Remove All</button>}
       
    </div>
    </>
  )
}

export default Todolist