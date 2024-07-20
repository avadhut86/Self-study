import React,{useEffect} from 'react'

const navbar = ({color}) => {
  useEffect(() => {
    alert("Color is changed")
  
  }, [])
  
  return (
    <div> 
        <p>I am Navbar {color} color less goo</p>
    </div>
  )
}

export default navbar



{/* <button className="btn" onClick={() = > {setCounter(counter+1)} }>Click Me</button> */}