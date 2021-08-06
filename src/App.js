import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/layouts/Navbar';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import Home from './Components/pages/Home';
import About from './Components/pages/About';
import RegisterForm from './Components/layouts/signup/RegisterForm';

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/register" component={RegisterForm}/>
          </Switch>      
      </div>
    </Router>
  );
}

export default App;
