import '../style/newssidebar.css'

const NewsSection = () => {
    return (
        <div id='news-section' className='section'>
            <div id='newsTitle'>LinkedIn News</div>
            <div className='news-container'>
                <div className='news-headline'></div>
                <div className='news-post-time'>23m ago</div>
            </div>
        </div>
    )
}

export default NewsSection