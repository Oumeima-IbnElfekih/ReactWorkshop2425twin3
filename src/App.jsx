
import { useState } from 'react';
import './App.css'
import FuncCom from './ComposantCours/FunctionalComponentLifeCycle/FuncCom';


function App() {
  const [{color, background}  , setColor] = useState({color :"red", background :"black"})



  return (
    <>
     <p>la couleur {color} et le background {background}</p>
     <input onChange={e=> setColor(c=> ({...c,color:e.target.value}))}  type="text" />
     <FuncCom />
       
    </>
  )
}

export default App
