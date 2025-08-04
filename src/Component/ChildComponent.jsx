import React from 'react'

function ChildComponent({receiveChildData}) {

    let message = "Hello I am child" ;

    let handleSend = () =>{
        receiveChildData(message);
    }
    
  return (
    <div>
        <h3>Child Component</h3>
        <button onClick={handleSend}>sendParent</button>
    </div>
  )
}

export default ChildComponent ;