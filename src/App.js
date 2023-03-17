import './App.css';
import './components/navigation'
import Navigation from './components/navigation';
import ProfileInfo from './components/profileinfo';
import SubmitBar from './components/submitbar';
import ContentSection from './components/contentsection';
import NewsSection from './components/newssidebar';
import PromotedSection from './components/promoted';
import images from './images';


function App() {
  const hideDiv = () => {
    document.getElementById('content-block').style.display = "none"
    const pics = document.getElementsByClassName('nav-image')
        
        for (let x=0; x < pics.length; x++) {
        pics[x].style.display = "block";
        }

        document.getElementsByClassName('user-photo-nav')[0].style.display = 'block'
        document.getElementById('nav-input').style.display = 'none'
  }

  return (
    <div className="App">
     <header>
      <Navigation/>
     </header>
     <div id='main-body'>
      <div id='content-block' onClick={() => hideDiv()}></div>
      <ProfileInfo/>
      <SubmitBar/>
      <ContentSection/>
      <NewsSection/>
      <PromotedSection/>
     </div>
     <footer></footer>
    </div>
  );
}

export default App;
