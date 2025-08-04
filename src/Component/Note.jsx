import React from 'react'
import { useParams } from 'react-router-dom';

function Note({note}) {
    let id = useParams().id;

    let newNote = note.find((n) => n.id == id) ;
  return (
    <div>
        <p>Notes</p>
        <p>{newNote.content}</p>
        <p>{newNote.important}</p>
    </div>
  )
}

export default Note ;