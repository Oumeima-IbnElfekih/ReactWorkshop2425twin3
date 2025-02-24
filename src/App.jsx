
import React,{ Suspense, useState } from 'react';
import './App.css'
import Events from './UseCase/Events';
// import ColorBox from './ExercicesProps&State/ColorBox';
import { Routes , Route ,Link} from 'react-router-dom';
// import Counter from './ExercicesProps&State/Counter';
const ColorBox = React.lazy(()=>import('./ExercicesProps&State/ColorBox'));
const Counter = React.lazy(()=>import('./ExercicesProps&State/Counter'));
function App() {
  

  return (
    <>
     {/* <Events /> */}
     {/* <ColorBox initialColor="red"  /> */}
     {/* <a href='/test/colorbox/oumeima/twin'>Colobox with ancer</a> */}
     <Link to='/test/colorbox/oumeima/twin' reloadDocument>Colobox with Link</Link>
     <Suspense fallback={<p>Loading...</p>}>
     <Routes>
      <Route path="/test" > 
        <Route path="colorbox/:username/:classe" element={<ColorBox initialColor="red" />} />
        <Route  path="counter" element={<Counter step="5" />} />
      </Route>
      <Route path="*" element={<p>404 not found</p>} />
     </Routes>
     </Suspense>
    </>
  )
}

export default App
