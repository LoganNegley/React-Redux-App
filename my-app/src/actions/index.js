import axios from 'axios';

export const fetchPokemon = () => {
    return dispatch => {
        dispatch({type: 'FETCHING_POKEMON_START'})
        axios.get('https://pokeapi.co/api/v2/pokemon/')
        .then(response => console.log(response))
        .catch(error => console.log(error, 'error at pokemon api call'))
    }
}