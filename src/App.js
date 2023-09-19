
import Home from './Screens/Home';
import Benefits from './Screens/Benefits';
import HowWeWork from './Screens/HowWeWork';
import Services from './Screens/Services';
import Contact from './Screens/Contact';
import Navbar  from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home />
      <Services />
      <HowWeWork />
      <Benefits />
      <Contact />
    </div>
  );
}

export default App;
