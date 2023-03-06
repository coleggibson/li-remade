import { headshot } from '../images'
import '../style/profileinfo.css'
import '../App.css'

const ProfileInfo = () => {
    return (
        <div id='profile-section' className='section'>
            <img id='profile-section-photo' className='user-photo' src={headshot}/>
            <div className='username'>Cole Gibson</div>
            <div className='user-description'>Front-End Developer | Tech Enthusiast</div>
            <div className='profile-views'>Who's viewed your Profile            15</div>
            <div className='profile-impressions'>Impressions of your post       20</div>
        </div>
    )
}

export default ProfileInfo