import axios from "axios";
import { config } from "../../Constants";
import { parseJwt } from "./Helpers";

const instance = axios.create({
    baseURL: config.url.API_BASE_URL
})


instance.interceptors.request.use(function (config) {
    if(config.headers.Authorization) {
        const token = config.headers.Authorization.split(" ")[1]
        const data = parseJwt(token)
        if (Date.now() > data.exp * 1000) {
            window.location.href = "/login"
        }
    }

    return config;
}, function(error) {
    return Promise.reject(error)
} )


export const userApi = {
    authenticate,
    getAllUsers,
    signup
}

function authenticate(username, password) {
    return instance.post('/api/auth/login' , {username, password}, {
        headers: { 'Content-type': 'application/json'}
    })
}

function getAllUsers(){
    return instance.get('/api/users', {
        headers: { 'Authorization': bearerAuth() }
    })
}

function signup(user) {
    return instance.post('/api/auth/register', user, {
        headers: { 'Content-Type': 'application/json' }
    })
}

function bearerAuth(user) {
  return `Bearer ${user.accessToken}`
}