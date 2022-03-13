
import './App.css';
import Home from './components/views/pages/home/Home';

import SideBar from './components/views/sidebar/SideBar';
import Topbar from './components/views/topbar/Topbar';

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
