import React, { useState } from 'react'

const B = () => {

    let [count, setCount]= useState(0)
    const handleAdd=()=>{
        setCount(count+1)
    }

    const handleReduce=()=>{
        setCount(count-1)
    }

  return (
    <>
    <h1>Welcome to counter</h1>
    <h2>Counter :{count}</h2>
    <button onClick={handleAdd}>Add</button>
    <button onClick={handleReduce}>Reduce</button>
    </>
  )
}

export default B
