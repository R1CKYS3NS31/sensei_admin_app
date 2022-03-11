
import './App.css';
import SideBar from './components/sidebar/SideBar';
import Topbar from './components/topbar/Topbar';

function App() {
  return (
    <div>
      <Topbar/>
      <div className="container">
        <SideBar/>
        <div className="others">Other pages</div>
      </div>
      
      
    </div>
  );
}

export default App;
