
import './App.css';
import Home from './components/views/pages/home/Home';
import SideBar from './components/views/sidebar/SideBar';
import Topbar from './components/views/topbar/Topbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import UserList from './components/views/pages/userList/UserList';


function App() {
  return (
    <Router>
      <Topbar/>
      <div className="container">
        <SideBar/>
        <Switch>
          <Route path={"/"} exact>
            <Home/>
          </Route>
          <Route path={"/users"}>
            <UserList/>
          </Route>
           
        </Switch>
       
      </div>
      
    
    </Router>
    
  );
}

export default App;
