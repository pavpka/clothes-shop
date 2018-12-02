export default function clothes(state = [], action){
    switch(action.type){
        case 'ADD_THIS_TYPE':{
            return[
                ...state,
                action.payload
            ]
        }
        case 'ADD_NEW_TYPE':{
            state = action.payload;
            break;
        }
    }
    return state
}
