import { addNewPost, deletePost, profileReducer } from './profile-reducer'

const state = {
  posts: [
    { id: 1, name: 'Alex', message: 'ffff' },
    { id: 2, name: 'Stive', message: 'Hi' },
    { id: 3, name: 'Jack', message: 'Wats up!' },
    { id: 4, name: 'Fred', message: 'Yo!' },
  ],
  userProfile: null,
  userStatus: '',
}

it('Add new post', () => {
  // 1. tes data
  const action = addNewPost('Hello world!')

  // 2. action
  const newState = profileReducer(state, action)

  // 3. expectation
  expect(newState.posts.length).toBe(5)
})

it('Message of new post', () => {
  const action = addNewPost('Hello world!')

  const newState = profileReducer(state, action)

  expect(newState.posts[4].message).toBe('Hello world!')
})

it('Delete post', () => {
  console.log('fffffffffffff')
  const action = deletePost(1)

  const newState = profileReducer(state, action)

  expect(newState.posts.length).toBe(3)
})
