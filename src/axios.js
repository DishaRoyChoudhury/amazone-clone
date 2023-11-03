// fetching library
//easier, easy way to add a base url
//widely used
import axios from "axios";

const instance =  axios.create({
    baseURL: 'https://us-central1-e-clone-39894.cloudfunctions.net/api' // THE API URL
});

export default instance;

// http://localhost:5002/e-clone-39894/us-central1/api