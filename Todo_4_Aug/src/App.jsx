import { useState } from 'react'
import './App.css'
import Button from './Button'
// import Popup from './Popup'
import TodoData from './TodoData'

function App() {
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
  function addTask(){
    setListData([...listData,todo])
    console.log(listData);
    setTodo("")
}

  return (
    <>
     <Button addBtn = {addTask}   />
     {/* <Popup/> */}
    {/* <TodoData/>    */}
    </>
  )
}

export default App
