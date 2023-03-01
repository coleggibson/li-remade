const SubmitBar = () => {
    return (
        <div id='submit-section' className='section middle-column'>
            <div>profile pic</div>
            <input type='text' placeholder='Start a post'/>
            <div id='submit-options'>
                <div className='submit-button'>Photo</div>
                <div className='submit-button'>Video</div>
                <div className='submit-button'>Event</div>
                <div className='submit-button'>Write article</div>
            </div>
        </div>
    )
}

export default SubmitBar