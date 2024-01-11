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
import DesktopSkill from './DesktopSkill';
import PhoneSkill from './PhoneSkill';
import TabSkill from './TabSkill';

const FrameChange = () => {
    return (
        <div className="App-inner">
          <div className='desktop'>
            <DesktopNav />
            <DesktopHeader />
            <main>
              <DesktopAbout />
              <DesktopSkill />
            </main>
          </div>
          <div className='phone'>
            <PhoneNav />
            <PhoneHeader />
            <main>
              <PhoneAbout />
              <PhoneSkill />
            </main>
          </div>
          <div className='tab'>
            <TabNav />
            <TabHeader />
            <main>
              <TabAbout />
              <TabSkill />
            </main>
          </div>
        </div>
      );
};

export default FrameChange;