// import logo from './logo.svg';
import './App.css';
import './frame.css';
import PhoneNav from './PhoneNav';
import DesktopNav from './DesktopNav';
import TabNav from './TabNav';

import DesktopHeader from './DesktopHeader';
import PhoneHeader from './PhoneHeader'; 
import TabHeader from './TabHeader';
function App() {
  return (
    <div className="App">
      <div className='desktop'>
        <DesktopNav />
        <DesktopHeader />
      </div>
      <div className='phone'>
        <PhoneNav />
        <PhoneHeader />
      </div>
      <div className='tab'>
        <TabNav />
        <TabHeader />
      </div>
    </div>
  );
}

export default App;
