// import logo from './logo.svg';
import './App.css';
import './frame.css';
import './desktop.css';
import './phone.css';
import PhoneNav from './PhoneNav';
import DesktopNav from './DesktopNav';

function App() {
  return (
    <div className="App">
      <div className='desktop'>
        <DesktopNav />
      </div>
      <div className='phone'>
        <PhoneNav />
      </div>
      <div className='tab'>
        Tab
      </div>
    </div>
  );
}

export default App;
