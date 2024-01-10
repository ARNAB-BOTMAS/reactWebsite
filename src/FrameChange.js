import './frame.css';
import PhoneNav from './PhoneNav';
import DesktopNav from './DesktopNav';
import TabNav from './TabNav';
import DesktopHeader from './DesktopHeader';
import PhoneHeader from './PhoneHeader'; 
import TabHeader from './TabHeader';
import DesktopAbout from './DesktopAbout';
import PhoneAbout from './PhoneAbout';
import TabAbout from './TabAbout';

const FrameChange = () => {
    return (
        <div className="App-inner">
          <div className='desktop'>
            <DesktopNav />
            <DesktopHeader />
            <main>
              <DesktopAbout />
            </main>
          </div>
          <div className='phone'>
            <PhoneNav />
            <PhoneHeader />
            <main>
              <PhoneAbout />
            </main>
          </div>
          <div className='tab'>
            <TabNav />
            <TabHeader />
            <main>
              <TabAbout />
            </main>
          </div>
        </div>
      );
};

export default FrameChange;