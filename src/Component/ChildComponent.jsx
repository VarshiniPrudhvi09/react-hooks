import React from 'react'
import GrandChildComponent from './GrandChildComponent';
import { MessageContext } from '../App';

function ChildComponent({message}) {


  let sumCoins = (coins)=>{

    return (coins.reduce((prev,curr)=> prev + curr ,0))
    
  }
  return (
    <div>
      <p>ChildComponent</p>
      <MessageContext.Consumer>
          {
            (data)=>{
              return (
                <div>
                    <p>message : {data.message}</p>
                    <p>sum of coins :{sumCoins(data.coins)}</p>
                </div>
              )
            }
          }
      </MessageContext.Consumer>
      <hr></hr>
      <GrandChildComponent/>
    </div>
  )
}

export default ChildComponent ;