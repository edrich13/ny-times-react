import axios from 'axios';

import { API_URL, API_KEY } from '../enviroment/config';
  
export function getArticles() {
	return axios.get(`${API_URL}/svc/mostpopular/v2/mostviewed/all-sections/30.json?api-key=${API_KEY}`)
		.then(response => response.data);
}

