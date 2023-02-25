import { connect } from 'react-redux'
import { addNewPost } from '../../../redux/profile-reducer'
import { Posts } from './Posts'

const mapStateToProps = (state) => ({
  posts: state.profilePage.posts,
  newPostText: state.profilePage.newPostText,
})

export let PostsContainer = connect(mapStateToProps, { addNewPost })(Posts)
