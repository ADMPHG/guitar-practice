import axios from 'axios';

// File to set up axios config
export default axios.create({
    baseURL: 'http://localhost:8000'
});