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
    return instance.get(`auth/me`).then((res) => {
      if (res.data.resultCode === 0) {
        return res.data.data
      }
    })
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

  getUserStatus(userId) {
    return instance.get(`profile/status/${userId}`).then((res) => {
      if (res.status === 200) {
        return res.data
      }
    })
  },

  updateUserStatus(userStatus) {
    return instance.put(`profile/status/`, { status: userStatus })
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

  login(email, password, rememberMe = false) {
    return instance.post(`auth/login`, {
      email,
      password,
      rememberMe,
    })
  },

  logout() {
    return instance.delete(`auth/login`)
  },

  savePhoto(userPhoto) {
    const formData = new FormData()
    formData.append('image', userPhoto)

    return instance
      .put(`profile/photo`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        debugger
        return res
      })
  },
}
