export const activeLinkReducer = (state='Skills', action) => {
    if(action.type === 'activeLinkChange'){
        return state = action.payload
    }else{
        return state
    }
}

