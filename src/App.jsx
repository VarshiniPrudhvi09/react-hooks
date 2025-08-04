
import React from 'react'
import { useRef } from 'react';

function App() {

  let inputRef = useRef(document.body) ;

  let handleInput = ()=>{
    let colors = ['red', 'green', 'blue','yellow','pink']

    let random = colors[Math.floor(Math.random()*5)];

    inputRef.current.style.backgroundColor = random ;
  }

  return (
    <div>
      <input
        type='text'
        placeholder='enter name'
       
      />
      <button   onClick={handleInput}>save</button>
    </div>
  )
}

export default App ;