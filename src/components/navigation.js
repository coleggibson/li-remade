import '../style/navigation.css'

// import '../images/index'
import {bell, logo, target, workIcon} from '../images/index'
import {homeIcon} from '../images/index.js'
import { briefcase } from '../images/index'
import { messageBubble } from '../images/index'
import { peopleIcon } from '../images/index'


const Navigation = () => {
    return(
    <div id='navigation-section' className ='section'>
        <img className='nav-image' src={logo} alt='logo'/>
        <input type='text' placeholder='Search Bar'/>
        <div id='right-nav-items'>
            <div className='nav-button'>
                <img className='nav-image' src={homeIcon}/>
            </div>
            <div className='nav-button'>
            <img className='nav-image' src={peopleIcon}/>
            </div>
            <div className='nav-button'>
            <img className='nav-image' src={briefcase}/>
            </div>
            <div className='nav-button'>
            <img className='nav-image' src={messageBubble}/>
            </div>
            <div className='nav-button'>
            <img className='nav-image' src={bell}/>
            </div>
            <div className='nav-button'>
                <div>Me</div>
            </div>
            <div className='nav-button'>
            <img className='nav-image' src={workIcon}/>
            </div>
            <div className='nav-button'>
            <img className='nav-image' src={target}/>
            </div>
        </div>
    </div>
    )
}

export default Navigation