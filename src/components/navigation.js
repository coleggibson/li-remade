import '../style/navigation.css'

// import '../images/index'
import {logo} from '../images/index'
import {homeIcon} from '../images/index.js'

const Navigation = () => {
    return(
    <div id='navigation-section' className ='section'>
        <img src={logo} alt='logo'/>
        <input type='text' placeholder='Search Bar'/>
        <div id='right-nav-items'>
            <div className='nav-button'>
                <img src={homeIcon}/>
            </div>
            <div className='nav-button'>
                <div>My Network</div>
            </div>
            <div className='nav-button'>
                <div>Jobs</div>
            </div>
            <div className='nav-button'>
                <div>Messaging</div>
            </div>
            <div className='nav-button'>
                <div>Notifications</div>
            </div>
            <div className='nav-button'>
                <div>Me</div>
            </div>
            <div className='nav-button'>
                <div>Work</div>
            </div>
            <div className='nav-button'>
                <div>Advertise</div>
            </div>
        </div>
    </div>
    )
}

export default Navigation