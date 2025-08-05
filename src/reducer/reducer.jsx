
let initialState = {
    count:0,
    history:[]
}

let reducer = (state, action)=>{
    switch(action.type){
        case "incr":
            return {count:state.count + 1,
                history:state.history.concat("I")
            }
    }
}

export {
    initialState,
    reducer
}