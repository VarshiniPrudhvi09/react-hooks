
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function App() {

  let [notes, setNotes] = useState([]) ;

 let [newName, setNewName] = useState([]);
 let [newGender, setNewGender] = useState([]) ;

  console.log(notes);
  let fetchData = async() =>{
    await axios.get('http://localhost:3001/note')
              
              .then((response) => setNotes(response.data));
  }

  useEffect(()=>{
    fetchData();
  },[])

  let handleForm = async(e)=>{
    e.preventDefault();

    let newObject = {
      id:notes.length + 1,
      name:newName,
      gender:newGender
    };

    await axios.post('http://localhost:3001/note',newObject)
          .then(()=>alert("new data added success"));

          fetchData();
          setNewName('')
          setNewGender("")
  }

  return (
    <div>
        <h3>List of Notes</h3>
        <div>
          {
           notes && notes.map((note)=>{
            return (
              <div>
                  <p>Name:{note.name}</p>
                  <p>Gender:{note.gender}</p>
                  <hr></hr>
              </div>
            )
           })
             
          }
        </div>
        <form onSubmit={handleForm}>
          <input type='text' 
            placeholder='Enter name'
            onChange={(e)=>setNewName(e.target.value)}
            value={newName}
          /><br/>
          <input
            type="text"
            placeholder='Enter gender'
            onChange={(e)=>setNewGender(e.target.value)}
            value={newGender}
          /><br/>
          <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default App ;