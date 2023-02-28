import './App.css';
import './components/navigation'
import Navigation from './components/navigation';
import ProfileInfo from './components/profileinfo';
import SubmitBar from './components/submitbar';
import ContentSection from './components/contentsection';
import NewsSection from './components/newssidebar';

function App() {
  return (
    <div className="App">
     <header>
      <Navigation/>
     </header>
     <body>
      <ProfileInfo/>
      <SubmitBar/>
      <ContentSection/>
      <NewsSection/>
     </body>
     <footer></footer>
    </div>
  );
}

export default App;
