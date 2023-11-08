export const handleActiveLink = (val) => {
    return (dispatch) => {
        dispatch({
            type: "activeLinkChange",
            payload:val
        })
    }
}