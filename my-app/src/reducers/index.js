
const initialState = {
    isLoading: false,
    joke: null,
    error: ''

}


export function jokeReducer(state = initialState, action){
    switch(action.type){
        case 'FETCHING_JOKES_START':
            return{
                ...state,
                isLoading: true
            };
        case 'FETCHING_DATA_SUCCESS':
        return{
            ...state,
            joke:action.payload
        };
        default: 
        return state;
    }
}