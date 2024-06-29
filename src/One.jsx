

//---------------USESTATE & USEEFFECT-----------

//import React from 'react'

//import { useState , useEffect , useRef} from 'react'

// function One() {

// const [count , setcount]= useState(0)



// useEffect(() => {
//  alert("count is change")    //jabjab mera count change hoga tab tab ye useefect chalega
// }, [count])


//   return (
//     <>
//     <h2>the value is {count}</h2>
//     <button onClick={()=>{setcount(count+1)}}>CLick me</button>
//     </>
//   )
// }

// export default One


//-----------------USEREF---------------

// import { useState , useEffect , useRef} from 'react'

// function One(){

// const [count,setcount]= useState(0)
// const a = useRef(0)

// useEffect(()=>{
//   a.current= a.current +1
//   console.log(`rerendering the value ${a.current}`)
// })
//   return(
//     <>
//        <h2>the value is {count}</h2>
//      <button onClick={()=>{setcount(count+1)}}>CLick me</button>
    
//     </>
//   )
// }

// export default One

//--------------usecallback------------
  
  import React, { useCallback, useState } from 'react'
  import Navbar from './Components/Navbar'


  function One() {

 const [adjective, setAdjective]= useState("good")


 //usecallback
  const getAdjective = useCallback(()=>{
     return " another"
  })


//without usecallbak
//function change hora h isliye nav bar re render hhoa h 

//const getAdjective =()=>{
  //  return "another"
//}




    return (
      <>
        <Navbar adjective={"good "} getAdjective={getAdjective}/>
      <h1>hellllo</h1>
      </>
    )
  }
  
  export default One
  



