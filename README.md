#HOOKS
-> react is nothing but react function component which inhance the capability.

->React Hooks are functions that let you use state and other React features in functional components.

//-----------------------------------------------------

## useState

->it provide state and its function which helps to changes it state.

ex:
const [count , setCount]= useState(0)

->count naam ka ek state banao jisko initial value 0 kardo.

->aur use saath saath ek function banao jo uske state ko update krne mai uski help kare 


## useeffect

-> useeffect helps to give side effect...
-> suupose hume ek useefect function pe ye ye chixe change karwani h like data fetch krdo. data lock kr do, data delete kr do...means jab mai vo button click karu toh jaha jaha mujhe chayiye vaha vaha useeffect k through chixe change hojani chayiye.

syntax:

useEffect(() => {
  
}, [])



## useref

so basically in every usestate the component re render itself..every tine we increase the counter value..the component rerender itself.

so the problem was that..when we use 
let a= 0
and we call somewhere ${a}
 so every rerender the value of a get automatically 0...it does not show the actuall value....

 (agar maine ek button 10 baar dabaya but a mai 0 store h na so vo 10 vali value firse 0 kr dega...so vo value mitne na dene k liye humne useref intreduce karaya )

 ..

 -> across rerender the value is same while using useref.


 ## usecontext
 
 The useContext hook in React is used to access the value of a context directly in a functional component. This hook simplifies the process of consuming context values without the need for a consumer component or render props.


 -> usecontext use to avoid prop drilling

 example will see in different project.


 ## usememo

 The useMemo hook in React is used to memoize a computed value, which can help improve performance by preventing unnecessary calculations on every render. This is particularly useful when you have expensive computations or need to avoid re-computing values unless certain dependencies have changed.


 -> ek bhot bada task diya h humne ek component mai ..so counter k button click pe pura ka pura compoennt re render hota h...so kya hum vo task har baar chalayenge..nahi na..so hum uss value ko memoise(memorize ) kar lete h. taki complex code ek he baar run hoye baar baar rerender na hoye..varna crash hosakta h code/component.


 ->between rerender humari value baar baar compute na ho..



