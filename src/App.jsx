import React, { useReducer } from 'react';
import { FaPlus } from "react-icons/fa6";
import { initialState, reducer } from './reducer/reducer';


function App() {
  let [state, dispatch] =useReducer(reducer,initialState)
  return (
    <div>
      <p>count:{state.count}</p>
      <button onClick={()=>dispatch({type:"incr"})}><FaPlus /></button>
    </div>
  )
}

export default App ;