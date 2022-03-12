
import './App.css';
import Home from './components/pages/home/Home';
import SideBar from './components/sidebar/SideBar';
import Topbar from './components/topbar/Topbar';

function App() {
  return (
    <div>
      <Topbar/>
      <div className="container">
        <SideBar/>
        <Home/>
      </div>
      
      
    </div>
  );
}

export default App;
