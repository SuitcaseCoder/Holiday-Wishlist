import './App.css';
import Home from './pages/Home';
import Heading from './components/Heading'

function App() {
  return (
    <div className="App">
      <Heading />
      <Home />
      <div id="bottom-link">Sign up for the <a href="http://eepurl.com/hcilqb">newsletter</a> for monthly challenges</div>
    </div>
  );
}

export default App;
