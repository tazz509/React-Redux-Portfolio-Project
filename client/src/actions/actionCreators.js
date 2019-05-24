export const createEvent=(event)=>{
    return (dispatch)=>{
        dispatch({ type:"START_REGISTERING_EVENT"})

        return {
            fetch("/")
        }
    }
}