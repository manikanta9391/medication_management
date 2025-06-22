import { useState } from 'react';
import { LuUsers } from "react-icons/lu";
import RecentActivity from '../../pages/RecentActivity';
import OverView from '../../pages/OverView';
import CalendarView from '../../pages/CalendarView';
import NotificationPreferences from '../../pages/Notification'; 
import Navbar from '../Navbar/navbar';
import './index.css';

const CareTakerDashboard = ({ name, percentage, streak, missed, taken }) => {
  return (
    <div className='dashboard'>
      <div className='first-containe'>
        <div className='icon-containe'>
          <LuUsers className='icon1' />
        </div>
        <div className='taker-container'>
          <span className='takerheading'>Caretaker Dashboard</span><br />
          <span className='name-taker'>Monitoring {name}'s Medication adherence</span>
        </div>
      </div>
      <div className='second-container'>
        <div className='montiring-dashboard'>
          <span className='percentage'>{percentage}%</span>
          <span className='naming'>Adherence Rate</span>
        </div>
        <div className='montiring-dashboard'>
          <span className='percentage'>{streak}</span>
          <span className='naming'>Current Streak</span>
        </div>
        <div className='montiring-dashboard'>
          <span className='percentage'>{missed}</span>
          <span className='naming'>Missed This Month</span>
        </div>
        <div className='montiring-dashboard'>
          <span className='percentage'>{taken}</span>
          <span className='naming'>Taken This Week</span>
        </div>
      </div>
    </div>
  );
};

const CareTaker = () => {
  const [buttonValue, setButtonValue] = useState('Overview');

  
  const dashboardData = {
    name: 'manikanta',
    percentage: 85,
    streak: 5,
    missed: 3,
    taken: 4
  };

  const renderContent = () => {
    switch (buttonValue) {
      case 'Overview':
        return <OverView />;
      case 'RecentActivity':
        return <RecentActivity />;
      case 'CalendarView':
        return <CalendarView />;
      case 'Notifications':
        return <NotificationPreferences />;
      default:
        return null;
    }
  };

  return (
    <div className='caretaker-container'>
      <Navbar />

      <div className='caretaker'>
        <CareTakerDashboard {...dashboardData} />
      </div>

      <div className='buttons-container'>
        <div className='buttons'>
          <button
            className={buttonValue === 'Overview' ? 'click-background' : 'button-background'}
            onClick={() => setButtonValue('Overview')}
          >
            Overview
          </button>
          <button
            className={buttonValue === 'RecentActivity' ? 'click-background' : 'button-background'}
            onClick={() => setButtonValue('RecentActivity')}
          >
            Recent Activity
          </button>
          <button
            className={buttonValue === 'CalendarView' ? 'click-background' : 'button-background'}
            onClick={() => setButtonValue('CalendarView')}
          >
            Calendar View
          </button>
          <button
            className={buttonValue === 'Notifications' ? 'click-background' : 'button-background'}
            onClick={() => setButtonValue('Notifications')}
          >
            Notifications
          </button>
        </div>
      </div>

      <div className='displyed-container'>
        {renderContent()}
      </div>
    </div>
  );
};

export default CareTaker;
