import React from 'react'

const RemoveBtn = ({deleteTask,key1}) => {
  return (
    <button onClick={ () => deleteTask(key1)}>Remove Task</button>
  )
}

export default RemoveBtn