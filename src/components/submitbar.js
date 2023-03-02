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
                <div className='submit-icon-title'>Photo</div>
                </div>
                <div className='submit-button'>
                <img className='submit-bar-icon' src={videoIcon}></img>
                <div className='submit-icon-title'>Video</div>
                </div>
                <div className='submit-button'>
                <img className='submit-bar-icon' src={calendar}></img>
                <div className='submit-icon-title'>Event</div>
                </div>
                <div className='submit-button'>
                <img className='submit-bar-icon' src={newspaper}></img>
                <div className='submit-icon-title'>Article</div>
                </div>
            </div>
        </div>
    )
}

export default SubmitBar