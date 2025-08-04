import { createRoot } from 'react-dom/client'
import App from './App.jsx'
let notes = [
    {
        id:1,
        content:"web applications use js",
        important:true
    },
    {
        id:2,
        content:"web application 2",
        important:true
    },
    {
        id:3,
        content:"web applications 3",
        important:true
    },
    {
        id:4,
        content:"web applications use 4",
        important:true
    },

];
createRoot(document.getElementById('root')).render(
  
    <App note = {notes} />
 
)
