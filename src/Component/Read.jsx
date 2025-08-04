import React from 'react';
import { Link } from 'react-router-dom';

function Read({note}) {

  return (
    <div>
        {
            note && note.map((item)=><li>
                <Link to={`/read/${item.id}`}>{item.content}</Link>
                </li>)
        }
    </div>

  )
}

export default Read ;