import React from 'react'

const Greets = (props) => {
    console.log(props);
  return (
    <h1> Hello {props.name} a.k.a {props.nickname} </h1>
  )
}

export default Greets 

    


