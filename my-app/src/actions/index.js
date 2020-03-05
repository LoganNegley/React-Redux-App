import axios from 'axios';

export const fetchJokes = () => {
    return dispatch => {
        dispatch({type: 'FETCHING_JOKES_START'})
        axios.get('https://icanhazdadjoke.com/', {headers:{'Accept': 'application/json'}})
        .then(response => {
            console.log(response)
            dispatch({type: 'FETCHING_DATA_SUCCESS', payload:response.data.joke})
        })
        .catch(error => console.log(error, 'error at dad joke api call'))
    }
}



// https://pokeapi.co/api/v2/pokemon/