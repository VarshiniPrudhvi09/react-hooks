import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createNote } from './reducer/noteReducer';

function App() {

  let notes = useSelector(state => state );
  let dispatch = useDispatch();

  let handleData = (e)=>{
      e.preventDefault();

      let content = e.target.note.value ;
      e.target.note.value = ""
      dispatch(createNote(content))
  }
  return (
    <div>
      <form onSubmit={handleData}>
          <input
            type="text"
            placeholder='type a note'
            name = "note"
          />
          <button type="submit">save</button>
      </form>

      <div>
        {
          notes && notes.map((note)=><li>{note.content}</li>)
        }
      </div>
    </div>
  )
}

export default App ;