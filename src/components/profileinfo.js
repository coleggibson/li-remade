import { headshot } from '../images'
import '../style/profileinfo.css'

const ProfileInfo = () => {
    return (
        <div id='profile-section' className='section'>
            <img id='profile-section-photo' className='user-photo' src={headshot}/>
            <div className='username'>Cole Gibson</div>
            <div className='user-description'>About me</div>
            <div className='profile-views'>Who's viewed your Profile</div>
            <div className='profile-impressions'>Impressions of your post</div>
        </div>
    )
}

export default ProfileInfo