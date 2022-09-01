import axios from 'axios';
const BASE_URL = 'http://localhost:5000/';



const network = axios.create(
    {
        withCredentials: true,
        baseURL: BASE_URL,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    }
);

export default network;