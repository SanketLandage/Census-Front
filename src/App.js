import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/layouts/Navbar';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import Home from './Components/pages/Home';
import About from './Components/pages/About';
import Register from './Components/layouts/signup/Register';
import UserProfile from './Components/pages/UserProfile';
import AdminProfile from './Components/pages/AdminProfile';
import NotFound from './Components/pages/NotFound';
import ListUser from './Components/layouts/ListUser';
import ViewUser from './Components/layouts/ViewUser';
import AddUser from './Components/layouts/AddUser';
function App() {
  return (
    <Router>
      <div>
        <Navbar/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path= "/adminprofile" component={AdminProfile}/>
            <Route exact path="/userprofile" component={UserProfile}/>
            <Route exact path="/notfound" component={NotFound}/>
            <Route exact path="/listUser" component={ListUser}/>
            <Route exact path="/viewUser" component={ViewUser}/>
            <Route exact path="/addUser/_add" component={AddUser}/>
          </Switch>      
      </div>
    </Router>
  );
}

export default App;
