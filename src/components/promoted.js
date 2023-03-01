
import '../style/promoted.css'

const PromotedSection = () => {
    return (
        <div id='promoted-section' className='section'>
            <div id='promoted-title'>Promoted</div>
            <div className='ad-container'>
                <div>Ad picture</div>
                <div className='ad-title'>Ad title</div>
                <div className='ad-content'>Ad content</div>
            </div>
            <div className='ad-container'>
                <div>Ad picture</div>
                <div className='ad-title'>Ad title</div>
                <div className='ad-content'>Ad content</div>
            </div>
            <div className='ad-container'>
                <div>Ad picture</div>
                <div className='ad-title'>Ad title</div>
                <div className='ad-content'>Ad content</div>
            </div>
        </div>
    )
}

export default PromotedSection