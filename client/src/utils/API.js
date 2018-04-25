import axios from 'axios';

const API = {
	registerUser: function(data) {
		axios.post('/register', data)
	},

	loginUser: function(data) {
		axios.post('/login', data)
	}
}

export default API;