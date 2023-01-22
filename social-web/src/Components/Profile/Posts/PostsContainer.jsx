import { connect } from 'react-redux'
import { addNewPost, updateNewPostText } from '../../../redux/profile-reducer'
import { Posts } from './Posts'

const mapStateToProps = (state) => ({
  posts: state.profilePage.posts,
  newPostText: state.profilePage.newPostText,
})

const mapDispatchToProps = (dispatch) => ({
  changePost(newPostText) {
    dispatch(updateNewPostText(newPostText))
  },
  addPost() {
    dispatch(addNewPost())
  },
})

export let PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)
