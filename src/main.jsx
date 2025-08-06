import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createStore } from 'redux'

let noteReducer = (state=0, action)=>{
    switch(action.type){
        case "Incr":
            return state + 1;
        case "Decr":
            return state - 1;
    }

}
const store = createStore(noteReducer) ;

store.subscribe(()=>{
    console.log(store.getState())
})
store.dispatch({
    type:'Incr'
})

store.dispatch({
    type:'Incr'
})

store.dispatch({
    type:'Incr'
})



store.dispatch({
    type:"Decr"
})

createRoot(document.getElementById('root')).render(
  
    <App />
 
)
