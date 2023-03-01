import "../style/contentsection.css"

const ContentSection = () => {
    return (
        <div id='content-section' className ='section middle-column'>
            <div className='timeline-post'>
                <div className='profile-info'>
                    <div className='profile-photo'>Profile pic</div>
                    <div className='profile-name'>Profile Name</div>
                    <div className='post-time'>3d</div>
                </div>
                <div className='post-content'>Post Content</div>
            </div>
            <div className='timeline-post'>
                <div className='profile-info'>
                    <div className='profile-photo'>Profile pic</div>
                    <div className='profile-name'>Profile Name</div>
                    <div className='post-time'>3d</div>
                </div>
                <div className='post-content'>Post Content</div>
            </div>
        </div>
    )
}

export default ContentSection