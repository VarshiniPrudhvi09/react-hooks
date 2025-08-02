
import React, { useEffect, useState } from 'react' ;


function App(){

  let [ datas , setDatas] = useState([]) ;

  let fetchData = async() =>{
    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
    let data = await response.json() ;

    console.log(data);
    setDatas(data.slice(50));
  }

  useEffect(()=>{
    fetchData() ;
  },[])

  useEffect(()=>{
    document.title = 'react hooks'
  })
  return (
    <div>
        <p>hello</p>
        {
          datas.map((item, index)=><li key={index}>{item.title}</li>)
        }
    </div>
  )
}

export default App ;