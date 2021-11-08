import axios from 'axios';

export let baseUrl = 'http://rest.ensembl.org';

axios.defaults.baseURL = baseUrl;

export default axios;