
import React from 'react' ;
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';

function App(){
  return (
    <Router>
        <div>
            <Link to='/'>Home</Link>
            <Link to='/create'>Create</Link>
            <Link to='/read'>Read</Link>
            <Link to='/update'>Update</Link>
            <Link to='/delete'>Delete</Link>
        </div>
      <Routes>
          <Route path='/' element={<Home/>}/>  
          <Route path='/create' element={<Create/>}/>  
          <Route path='/read' element={<Read/>}/>  
          <Route path='/update' element={<Update/>}/>  
          <Route path='/delete' element={<Delete/>}/>  
      </Routes>
    </Router>
  )
}

export default App ;