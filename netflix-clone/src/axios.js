import axios from 'axios';

// Base url to make request to the movie database
const Axios = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
});

export default Axios;