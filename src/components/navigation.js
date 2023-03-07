import '../style/navigation.css'

// import '../images/index'
import {bell, headshot, logo, searchIcon, target, workIcon} from '../images/index'
import {homeIcon} from '../images/index.js'
import { briefcase } from '../images/index'
import { messageBubble } from '../images/index'
import { peopleIcon } from '../images/index'


const Navigation = () => {

    const showSearch = () => {
        const pics = document.getElementsByClassName('nav-image')
        
        for (let x=0; x < pics.length; x++) {
        pics[x].style.display = "none";
        }

        document.getElementsByClassName('user-photo-nav')[0].style.display = 'none'
        document.getElementById('nav-input').style.display = 'block'
        document.getElementById('content-block').style.display = 'block'

    }

    return(
    <div id='navigation-section' className ='section'>
        <img id='logo' className='nav-icon' src={logo} alt='logo'/>
        <input id='nav-input' type='text' placeholder='Search Bar'/>
        <div id='right-nav-items'>
            <div className='nav-button'>
            <img id='search-image' 
            className='nav-image' 
            src={searchIcon}
            onClick={() => showSearch()}/>
            <div className='nav-button-title'>My Network</div>
            </div>
            <div className='nav-button'>
                <img className='nav-image' src={homeIcon}/>
                <div className='nav-button-title'>Home</div>
            </div>
            <div className='nav-button'>
            <img className='nav-image' src={peopleIcon}/>
            <div className='nav-button-title'>My Network</div>
            </div>
            <div className='nav-button'>
            <img className='nav-image' src={briefcase}/>
            <div className='nav-button-title'>Jobs</div>
            </div>
            <div className='nav-button'>
            <img className='nav-image' src={messageBubble}/>
            <div className='nav-button-title'>Messaging</div>
            </div>
            <div className='nav-button'>
            <img className='nav-image' src={bell}/>
            <div className='nav-button-title'>Notifications</div>
            </div>
            <div className='user-nav-button'>
                <img src={headshot} className='user-photo-nav'/>
                <div className='nav-button-title'>Me</div>
            </div>
            <div className='nav-button'>
            <img className='nav-image' src={workIcon}/>
            <div className='nav-button-title'>Work</div>
            </div>
            <div id='right-nav-button' className='nav-button'>
            <img id='right-nav-image' className='nav-image' src={target}/>
            <div className='nav-button-title'>Advertise</div>
            </div>
        </div>
    </div>
    )
}

export default Navigation