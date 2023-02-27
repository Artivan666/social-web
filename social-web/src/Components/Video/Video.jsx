import s from './Video.module.css'
import ss from '../../App.module.css'

const Video = (props) => {
  return (
    <div className={s.video + ' ' + ss.os + ' ' + ss.cp}>
      <p>Video</p>
    </div>
  )
}

export default Video
