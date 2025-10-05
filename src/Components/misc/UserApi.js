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
        console.log("Authorization header found in request:", data)
        if (Date.now() > data.exp * 1000) {
            window.location.href = "/login"
        }
    }

    return config;
}, function(error) {
    console.log("error caught in interceptor", error)
} )


export const userApi = {
    authenticate,
    getAllUsers,
    signup,
    getUserProfile,
    updateUserProfile,
    fetchChannels,
    updateChannels,
    createChannel,
    removeChannel
}

function authenticate(username, password) {
    return instance.post('/api/auth/login' , {username, password}, {
        headers: { 'Content-type': 'application/json'}
    })
}

function getAllUsers(user){
    return instance.get('/api/users', {
        headers: { 'Authorization': bearerAuth(user) }
    })
}

function getUserProfile(user) {
    console.log("Fetching user profile for:", user)
    return instance.get(`/api/profile?username=${user.data.sub}`,{
        headers: { 'Authorization': bearerAuth(user) }
    })
}

function createChannel(user, channel) {
    return instance.post('/api/channels', channel, {
        headers: { 'Authorization': bearerAuth(user) }
    })
}

function removeChannel(user, channelName) {
    return instance.delete(`/api/channels?channelName=${channelName}`, {
        headers: { 'Authorization': bearerAuth(user) }
    })
}

function updateUserProfile(user, profile) {
    console.log(user.data.sub)
    return instance.patch(`/api/profile?username=${user.data.sub}`, profile, {
        headers: { 'Authorization': bearerAuth(user) }
    })
}

function updateChannels(user, channels) {
    return instance.patch(`/api/channels`, channels, {
        headers: { 'Authorization': bearerAuth(user) }
    })
}

function fetchChannels(user) {
    return instance.get('/api/channels', {
        headers: { 'Authorization': bearerAuth(user) }
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