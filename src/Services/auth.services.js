import axios from 'axios';

const API_URL = 'http://localhost:8081/';

class AuthService {
    login(username, password) {
        return axios
            .post(API_URL + "login", { username, password }, { headers:{'allow-control-allow-origin':'*'}})
            .then(response => {
                if (response.data.token) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }
                return response.data;
            });
    }

    register(username, email, password) {
        return axios
            .post(API_URL + "signup", { username, email, password })
            .then(response => {
                if (response.data.token) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }
                return response.data;
            });
    }

    logout() {
        localStorage.removeItem("user");
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem("user"));;
    }
}


export default new AuthService();