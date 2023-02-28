import '../style/navigation.css'

const Navigation = () => {
    return(
    <div id='navigation-section' className ='section'>
        <div>LinkedIn Logo</div>
        <input type='text' placeholder='Search Bar'/>
        <div className='nav-button'>
            <div>Home</div>
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
    )
}

export default Navigation