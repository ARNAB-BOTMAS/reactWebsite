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
import DesktopEdu from './DesktopEdu';
import PhoneEdu from './PhoneEdu';
import TabEdu from './TabEdu';

const FrameChange = () => {
    return (
        <div className="App-inner">
          <div className='desktop'>
            <DesktopNav />
            <DesktopHeader />
            <main>
              <DesktopAbout />
              <DesktopSkill />
              <DesktopEdu />
            </main>
          </div>
          <div className='phone'>
            <PhoneNav />
            <PhoneHeader />
            <main>
              <PhoneAbout />
              <PhoneSkill />
              <PhoneEdu />
            </main>
          </div>
          <div className='tab'>
            <TabNav />
            <TabHeader />
            <main>
              <TabAbout />
              <TabSkill />
              <TabEdu />
            </main>
          </div>
        </div>
      );
};

export default FrameChange;