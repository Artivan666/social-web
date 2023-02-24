import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': 'e5f2c05d-3abf-4136-95a0-734ede57770a',
  },
})

export const usersAPI = {
  authMe() {
    return instance.get(`auth/me`)
  },

  getUserProfile(userId) {
    return instance.get(`profile/${userId}`).then((res) => {
      if (res.status === 200) {
        return res.data
      } else {
        console.log('api error in getUserProfile')
      }
    })
  },

  getUsers(pageSize, pageNumber) {
    return instance
      .get(`users?count=${pageSize}&page=${pageNumber}`)
      .then((res) => {
        if (res.status === 200) {
          return res.data
        }
      })
  },

  subscribe(userId) {
    return instance.post(`follow/${userId}`)
  },

  unsubscribe(userId) {
    return instance.delete(`follow/${userId}`)
  },
}
