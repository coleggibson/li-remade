import './App.css';
import './components/navigation'
import Navigation from './components/navigation';
import ProfileInfo from './components/profileinfo';

function App() {
  return (
    <div className="App">
     <header>
      <Navigation/>
      <ProfileInfo/>
     </header>
     <body></body>
     <footer></footer>
    </div>
  );
}

export default App;
