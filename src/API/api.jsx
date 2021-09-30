import axios from "axios";

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        "API-KEY": "11cec73d-c627-4b8d-b25b-4360d96098f9"
    }
});

export const UsersAPI = {
    getUsers(currentPage = 1, pageSize = 8) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    },
    followUser(userId) {
        return instance.post(`/follow/${userId}`)
    },
    unfollowUser(userId) {
        return instance.delete(`/follow/${userId}`)
    }
}

export const AuthAPI = {
    authMe() {
        return instance.get(`auth/me`)
    }
}

export const ProfileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => {
                return response.data
            });
    }
}
