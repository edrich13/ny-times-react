import axios from 'axios';

export const API_URL = 'https://api.nytimes.com';
export const API_KEY = 'Y7r3KD5c6iSk6lb9p0mKuN02R2U5xVgT';

export function getArticles() {
	return axios.get(`${API_URL}/svc/mostpopular/v2/mostviewed/all-sections/30.json?api-key=${API_KEY}`)
		.then(response => response.data);
}

