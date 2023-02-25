import s from './UserStatus.module.css'
import ss from '../../../App.module.css'
import React from 'react'

export class UserStatus extends React.Component {
  state = {
    editMode: false,
    userStatus: this.props.userStatus,
  }

  activateEditMode = () => {
    this.setState({
      editMode: true,
    })
  }

  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    })
    this.props.updateUserStatus(this.state.userStatus)
  }

  onUserStatusChange = (e) => {
    this.setState({
      userStatus: e.currentTarget.value,
    })
  }

  componentDidUpdate(prevProps, prevState) {
    // для рефакторинга лишних отрисовок
    if (prevProps.userStatus !== this.props.userStatus) {
      console.log('component did update')
      this.setState({
        userStatus: this.props.userStatus,
      })
    }
  }

  componentWillUnmount() {
    // console.log('component is dead')
  }

  render() {
    return (
      <div className={s.userStatus + ' ' + ss.os}>
        {this.state.editMode ? (
          <div>
            <input
              onBlur={this.deactivateEditMode}
              autoFocus={true}
              onChange={this.onUserStatusChange}
              value={this.state.userStatus}
            />
          </div>
        ) : (
          <div onDoubleClick={this.activateEditMode}>
            {this.props.userStatus ? this.props.userStatus : '-----'}
          </div>
        )}
      </div>
    )
  }
}
