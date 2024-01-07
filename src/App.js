// import logo from './logo.svg';
import './App.css';
import './frame.css';
import PhoneNav from './PhoneNav';
import DesktopNav from './DesktopNav';
import TabNav from './TabNav';

import DesktopHeader from './DesktopHeader';
import PhoneHeader from './PhoneHeader'; // Correct the import statement

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
      </div>
    </div>
  );
}

export default App;
