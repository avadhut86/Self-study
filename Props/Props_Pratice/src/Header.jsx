import React from 'react'

const Header = (abc) => { //Here this props name 
    console.log(abc);
  return <h1>Hello {abc.name} </h1> //Scall with props name
}

export default Header