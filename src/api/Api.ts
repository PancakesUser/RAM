import axios from 'axios';
interface axiosget {
    results: [],
    info: {},
}


export const getCharacters = (path: String) =>  {
    axios.defaults.baseURL = 'https://rickandmortyapi.com/api/';
    return axios.get<axiosget>(`${path}`)
};

export const searchCharacter = (character: String) => {
    axios.defaults.baseURL = `http://rickandmortyapi.com/api/character/`;
    return axios.get<axiosget>(`?name=${character}`);
}