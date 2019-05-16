const initialState = {
    name: '',
    location: '',
    date: '',
    time: '',
    notes: ''

}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'RESET_EVENT_FORM':
            return initialState;
        
        default:    
            return state;
    }
}