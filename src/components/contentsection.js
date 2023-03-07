import { headshot, motivation, person1, person2, person3 } from "../images"
import "../style/contentsection.css"
import { likeIcon, comment, repost, send } from "../images"


const ContentSection = () => {
    return (
        <div id='content-section' className ='middle-column'>
            <div className='timeline-post'>
            <div className='post-top-info'>
                    <div className='profile-photo'>
                        <img src={person1} className='user-photo'></img>
                    </div>
                    <div className='post-right-content'>
                    <div className='profile-name'>Todd Downing (Sales Guru 4 You!)</div>
                    <div className='profile-description'>Sales and marketing expert with over 100 years experience</div>
                    <div className='post-time'>3d</div>
                    </div>
                </div>
                <div className='post-content'>Are you tired of being tired? Are you not making the sales you NEED or WANT to make? Does the world bring you down spin you around and back again? Well follow me for 75 tips to keep your mind at ease and your WALLET full of dough. </div>
                <img className='post-image' src={motivation}></img>
                <div className='react-buttons-container'>
                <img className='user-photo' src={headshot}/>
                    <div className='react-button'>
                    <img className='content-icon' src={likeIcon}></img>
                        <div className='react-button-title'>Like</div>
                    </div>
                    <div className='react-button'>
                    <img className='content-icon' src={comment}></img>
                    <div className='react-button-title'>Comment</div>
                    </div>
                    <div className='react-button'>
                    <img className='content-icon' src={repost}></img>
                    <div className='react-button-title'>React</div>
                    </div>
                    <div className='react-button'>
                    <img className='content-icon' src={send}></img>
                    <div className='react-button-title'>Send</div>
                    </div>
                </div>
            </div>
            <div className='timeline-post'>
            <div className='post-top-info'>
                    <div className='profile-photo'>
                    <img src={person2} className='user-photo'></img>
                    </div>
                    <div className='post-right-content'>
                        <div className='profile-name'>Ron Smith</div>
                        <div className='profile-description'>Open for hire</div>
                        <div className='post-time'>5d</div>
                    </div>
                </div>
                <div className='post-bottom-content'>Looking for work.  I'm proficient in mongolian throat singing and procrastination. Will dance and sing if required.</div>
                <div className='react-buttons-container'>
                <img className='user-photo' src={headshot}/>
                    <div className='react-button'>
                    <img className='content-icon' src={likeIcon}></img>
                        <div className='react-button-title'>Like</div>
                    </div>
                    <div className='react-button'>
                    <img className='content-icon' src={comment}></img>
                    <div className='react-button-title'>Comment</div>
                    </div>
                    <div className='react-button'>
                    <img className='content-icon' src={repost}></img>
                    <div className='react-button-title'>React</div>
                    </div>
                    <div className='react-button'>
                    <img className='content-icon' src={send}></img>
                    <div className='react-button-title'>Send</div>
                    </div>
                </div>
            </div>
            <div className='timeline-post'>
            <div className='post-top-info'>
                    <div className='profile-photo'>
                    <img src={person3} className='user-photo'></img>
                    </div>
                    <div className='post-right-content'>
                        <div className='profile-name'>Billy Strings</div>
                        <div className='profile-description'>Not to be confused with the bluegrass legend</div>
                        <div className='post-time'>2m</div>
                    </div>
                </div>
                <div className='post-bottom-content'>Celebrating 5 years at Google!</div>
                <div className='react-buttons-container'>
                <img className='user-photo' src={headshot}/>
                    <div className='react-button'>
                    <img className='content-icon' src={likeIcon}></img>
                        <div className='react-button-title'>Like</div>
                    </div>
                    <div className='react-button'>
                    <img className='content-icon' src={comment}></img>
                    <div className='react-button-title'>Comment</div>
                    </div>
                    <div className='react-button'>
                    <img className='content-icon' src={repost}></img>
                    <div className='react-button-title'>React</div>
                    </div>
                    <div className='react-button'>
                    <img className='content-icon' src={send}></img>
                    <div className='react-button-title'>Send</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentSection