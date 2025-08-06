import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createStore } from 'redux' ;
import noteReducer from './reducer/noteReducer.jsx';
import { Provider } from 'react-redux';
const store = createStore(noteReducer) ;

createRoot(document.getElementById('root')).render(
  <Provider store = {store}>
        <App />
  </Provider>
    
 
)
