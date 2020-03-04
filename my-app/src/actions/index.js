import axios from 'axios';

export const fetchPokemon = () => {
    return dispatch => {
        dispatch({type: 'FETCHING_POKEMON_START'})
        axios.get('https://pokeapi.co/api/v2/pokemon/')
        .then(response => {
            // response.data.results
            dispatch({type: 'FETCHING_DATA_SUCCESS', payload:response.data.results})
        })
        .catch(error => console.log(error, 'error at pokemon api call'))
    }
}

