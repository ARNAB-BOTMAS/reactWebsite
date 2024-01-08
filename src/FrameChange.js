import './frame.css';
import PhoneNav from './PhoneNav';
import DesktopNav from './DesktopNav';
import TabNav from './TabNav';
import DesktopHeader from './DesktopHeader';
import PhoneHeader from './PhoneHeader'; 
import TabHeader from './TabHeader';

const FrameChange = () => {
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
};

export default FrameChange;