import React from 'react'

const Todoadd = ({toAdd}) => {
  return (
    <button className='myBtn' onClick={toAdd}>&#43;</button>
  )
}

export default Todoadd