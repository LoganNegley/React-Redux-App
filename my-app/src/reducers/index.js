
const initialState = {
    isLoading: false,
    pokemon: null,
    error: ''

}


export function pokemonReducer(state = initialState, action){
    switch(action.type){
        case 'FETCHING_POKEMON_START':
            return{
                ...state,
                isLoading: true
            }
        case 'FETCHING_DATA_SUCCESS':
        return{
            ...state,
            pokemon:action.payload
        }
        default: 
        return state;
    }
}