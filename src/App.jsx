
import React, { useState } from 'react' ;
import ChildComponent from './Component/ChildComponent';
import { Route, BrowserRouter as Router, Link, Routes } from 'react-router-dom';
import Home from './Component/Home';
import Create from './Component/Create';
import Read from './Component/Read';
import Note from './Component/Note';
function App({note}) {


  let padding ={
    padding:10
  }
  // npm install react-router-dom
  return (
    <Router>
      <div>
          <Link to='/' style={padding}>Home</Link>
          <Link to='/create' style={padding}>Create</Link>
          <Link to='/read' style={padding}>Read</Link>
      </div>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/create' element={<Create/>}/>
          <Route path='/read' element={<Read note={note}/>}/>
          <Route path='/read/:id' element={<Note note={note}/>}/>
      </Routes>
    </Router>
  )
}

export default App ;