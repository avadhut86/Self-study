import React from 'react'

const RemoveAll = ({Data,all}) => {
  return (
    <>
    {Data.length >= 1 && <button onClick={all}>Remove All Task</button>}
    </>
  )
}

export default RemoveAll