import axios from 'axios';

export const UserController = {
    list() {
        return axios({
            method: 'GET',
            baseURL: process.env.REACT_APP_API,
            url: '/users'
        });
    },
    register(user) {
        return axios({
            url: `users`,
            baseURL: process.env.REACT_APP_API,
            data: user,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
        })
    },
    delete(id) {
        return axios({
            method: 'DELETE',
            baseURL: process.env.REACT_APP_API,
            url: `users/${id}`,
        });
    },
    edit(user) {
        return axios({
            method: 'PUT',
            baseURL: process.env.REACT_APP_API,
            url: `users/${user.document}`,
            data: user,
            headers: {
                'Content-Type': 'application/json',
              },
        });
    },
}
