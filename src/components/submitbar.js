import '../style/submitbar.css'
import {calendar, gallery, newspaper, videoIcon} from '../images/index'

const SubmitBar = () => {
    return (
        <div id='submit-section' className='section middle-column'>
            <div id='submit-bar-top' className='submit-subsection'>
                <div>profile pic</div>
                <input id='submit-input' type='text' placeholder='Start a post'/>
            </div>
            <div id='submit-bar-bottom' className='submit-subsection'>
                <div className='submit-button'>
                <img className='submit-bar-icon' src={gallery}></img>
                </div>
                <div className='submit-button'>
                <img className='submit-bar-icon' src={videoIcon}></img>
                </div>
                <div className='submit-button'>
                <img className='submit-bar-icon' src={calendar}></img>
                </div>
                <div className='submit-button'>
                <img className='submit-bar-icon' src={newspaper}></img>
                </div>
            </div>
        </div>
    )
}

export default SubmitBar