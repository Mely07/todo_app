// the goal?? 

const initialState = {
    items: []
}


export const rootReducer = (state = initialState, action) => {
    // ??? populate the state based on the action 
    switch(action.type){
        case 'ADD_ITEM':
            return {...state, items: [...state.items, action.payload]}
        default:
            return state
    }
}


