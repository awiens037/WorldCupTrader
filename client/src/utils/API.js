import axios from 'axios';

const API = {
	registerUser: function(data) {
		return axios.post('/register', data)
	},

	loginUser: function(data) {
		return axios.post('/login', data)
	},

	usersList: function (){
		return axios.get('/usersList')
	}

	
}

export default API;