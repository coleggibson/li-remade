import '../style/newssidebar.css'

const NewsSection = () => {
    return (
        <div id='news-section' className='section'>
            <div id='newsTitle'>LinkedIn News</div>
            <div className='news-container'>
                <div className='news-item'>
                    <div className='news-headline'>Zoom suddenly fired its president</div>
                    <div className='news-post-time'>23m ago</div>
                </div>
                <div className='news-item'>
                    <div className='news-headline'>Microsoft working on computer chip for the brain</div>
                    <div className='news-post-time'>50m ago</div>
                </div>
                <div className='news-item'>
                    <div className='news-headline'>Elon Musk drives Tesla to Saturn</div>
                    <div className='news-post-time'>2h ago</div>
                </div>
                <div className='news-item'>
                    <div className='news-headline'>ATMs are on the outs</div>
                    <div className='news-post-time'>43m ago</div>
                </div>
                <div className='news-item'>
                    <div className='news-headline'>Talking about the weather at an all time high</div>
                    <div className='news-post-time'>3h ago</div>
                </div>
            </div>
        </div>
    )
}

export default NewsSection