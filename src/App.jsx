import React, { createContext, useState } from 'react'
import ChildComponent from './Component/ChildComponent';

let MessageContext = createContext();

function App() {
  let [message, setMessage] = useState("Hello this is message");
  let [coins, setCoins] = useState([1,2,3,4,5,6]) ;

  return (
   <MessageContext.Provider value={{message, coins}}>
      <ChildComponent/>
   </MessageContext.Provider>
  )
}

export {App as default, MessageContext} ;