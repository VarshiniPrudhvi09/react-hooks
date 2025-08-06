let noteReducer = (state=[],action) =>{
    switch(action.type){
        case "New_Note":
            return state.concat(action.payload) ;
    }

}


export let createNote=(content)=>({
    type:"New_Note",
    payload:{
        id:1,
        content,
        important:true
        
    }
})

export default noteReducer ;