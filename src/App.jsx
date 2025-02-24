
import { useState } from 'react';
import './App.css'
import Events from './UseCase/Events';
import ColorBox from './ExercicesProps&State/ColorBox';
import { Routes , Route } from 'react-router-dom';
import Counter from './ExercicesProps&State/Counter';

function App() {
  

  return (
    <>
     {/* <Events /> */}
     {/* <ColorBox initialColor="red"  /> */}
     <Routes>
      <Route path="/test" > 
        <Route path="colorbox/:username/:classe" element={<ColorBox initialColor="red" />} />
        <Route  path="counter" element={<Counter step="5" />} />
      </Route>
     </Routes>
    </>
  )
}

export default App
