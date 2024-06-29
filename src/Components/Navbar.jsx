import React from 'react'
import { memo } from 'react'

function Navbar({adjective , getAdjective}) {
    console.log("navbar is render")
  return (
   <>
   <h3>i am {adjective} navbar</h3>
   <button onClick={()=>{getAdjective()}}></button>
   </>
  )
}

export default memo(Navbar)


//memo is used jab jab props change hoga tab he render hoga varna nahi 

//usecallback isliye use karte h kyuki every rerender function ko lagta h ki vo dusara function hai
//isliye vo 2 function consider karte h..isliye callback use krte h taki usko bataye ki yahi vo pichla function h toh tu isko re rednder mat kr

//use call back apke function ko freeze kr deta h taki same function 2 baar re render na hoye
