import React, { useContext } from 'react'
import { MessageContext } from '../App';

function GrandChildComponent() {
    let {coins, message} = useContext(MessageContext) ;
  return (
    <div>
        <h3>GrandChildComponent</h3>
        <p>message to parent :{message}</p>
        <p>coins : {coins}</p>
    </div>
  ) 
}

export default GrandChildComponent ;