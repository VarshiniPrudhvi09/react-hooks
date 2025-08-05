import React, { useReducer } from 'react';
import { FaPlus } from "react-icons/fa6";
import { initialState, reducer } from './reducer/reducer';
import { data } from 'react-router-dom';


function App() {
  let [state, dispatch] =useReducer(reducer,initialState)

  // window.localStorage.setItem("name",notes.name) ;
  // window.localStorage.getItem('name');
  // window.localStorage.removeItem('name') ;
  return (
    <div>
      <p>count:{state.count}</p>
      <button onClick={()=>dispatch({type:"incr"})}><FaPlus /></button>
    </div>
  )
}

export default App ;