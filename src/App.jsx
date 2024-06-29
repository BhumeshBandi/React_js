/*here we are using hooks */
import { useState } from "react"


function App() {



let [counter,setCounter]=useState(0)
let [bhumesh,setbhumesh]= useState(1)

const addvalue=()=>{
  counter= counter +1
  setCounter(counter)
}

const removevalue=()=>{
  counter= counter -1
  setCounter(counter)
}

const bhum=()=>{
  bhumesh=bhumesh*2
  setbhumesh(bhumesh)

}





return(
  <>
  <h1>MY first Counter Project !!!</h1>
  <h2>counter value:{counter} {bhumesh}</h2>

  <button onClick={addvalue}
  >Add</button>
  <button onClick={removevalue}
  >remove</button>


  <button onClick={bhum}>multiply</button>

  </>
)}

export default App






