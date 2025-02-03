import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClassComponent from './ComposantCours/ClassComponent'
import FuncComponent from './ComposantCours/FuncComponent'

function App() {
  const [count, setCount] = useState(0)

function somme(a,b){
  return a+b;
}
console.log(somme(1,2));

const sommeE =(a,b)=> a+b;

console.log(sommeE(1,2));
const array1 = [1, 4, 9, 16];
const res= array1.map(x=>x*2);
const array2 =array1.filter(x=>x>5);
console.log(array2);
console.log(res);
let sommeTab=0;
const ResultReduce= array1.reduce((acc,curr)=>acc+curr,sommeTab);
console.log(ResultReduce);

let obj= {name:'amine',age:25};
obj= {...obj,classe: "TWIN3"};
console.log(obj);



  return (
    <>
      <div>
        <ClassComponent name="foulen ben foulen" />
        <FuncComponent name="foulen ben foulen" />
        <h1>Resultat de Reduce {ResultReduce}</h1>
        <p>contenu de l'objet : {obj.age}</p>
        <ul>
        {array1.map((x) =>{ return <li>{x}</li>})}
        </ul>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
