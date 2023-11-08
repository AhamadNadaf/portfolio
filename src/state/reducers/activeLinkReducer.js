export const activeLinkReducer = (state='Project', action) => {
    if(action.type === 'activeLinkChange'){
        return state = action.payload
    }else{
        return state
    }
}

