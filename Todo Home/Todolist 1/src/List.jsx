import React from 'react'

const List = ({aarayOfData,remove}) => {
  return (
    
    <>
    {aarayOfData!=[] && aarayOfData.map((data, index)=>{
        return (
            <>
            <p key={index}>
                <div className='listData'> {data} </div>
                <div className='btn-postion'><button onClick={()=>remove(index)}>Delete</button></div>
                
            </p>
            </>
        )
    })}

</>
  )
}

export default List