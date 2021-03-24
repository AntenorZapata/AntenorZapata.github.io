import '../src/style/App.scss';
import Landing from './Pages/Landing';
import Navbar from './Components/Navbar';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <Navbar />
      </div>
      <div className="home">
        <div className="content">
          <Switch>
            <Route path="/" exact>
              <Landing />
            </Route>
            <Route path="/about" exact>
              <About />
            </Route>
            <Route path="/projects" exact>
              <Projects />
            </Route>
            <Route path="/contact" exact>
              <Contact />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
