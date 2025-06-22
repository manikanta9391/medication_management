import { FiUser } from "react-icons/fi";
import Navbar from "../Navbar/navbar";
import { FaRegClock, FaRegImage } from 'react-icons/fa';
import { CiCalendar, CiImageOn } from "react-icons/ci";
import CalendarView from "../../pages/CalendarView";
import './index.css';

const PatientPage = () => {
  return (
    <div className='patient-wrapper'>
      <Navbar />
      <div className='main-patient'>
        <div className='stats-section'>
          <div className='header-block'>
            <div className='icon-box'>
              <FiUser className='user-icon' />
            </div>
            <div className='text-content'>
              <span className='greeting-title'>Good Afternoon!</span><br />
              <span className='reminder-text'>Ready to stay on track with your medication?</span>
            </div>
          </div>
          <div className='metrics-group'>
            <div className='metric-card'>
              <span className='metric-value'>0</span>
              <span className='metric-label'>Day Streak</span>
            </div>
            <div className='metric-card'>
              <span className='metric-value'>O</span>
              <span className='metric-label'>Today's Status</span>
            </div>
            <div className='metric-card'>
              <span className='metric-value'>0%</span>
              <span className='metric-label'>Monthly Rate</span>
            </div>
          </div>
        </div>

        <div className='displyed-container123'>
          <div className="medication-card">
            <h2 className="card-title">
              <CiCalendar /> Today's Medication
            </h2>

            <div className="medication-item">
              <div className="medication-left">
                <div className="step-circle">1</div>
                <div className="medication-info">
                  <div className="medication-name">Daily Medication Set</div>
                  <div className="medication-desc">Complete set of daily tablets</div>
                </div>
              </div>
              <div className="medication-time">
                <FaRegClock /> 8:00 AM
              </div>
            </div>

            <div className="proof-section">
              <FaRegImage className="proof-icon" />
              <p className="proof-heading">Add Proof Photo (Optional)</p>
              <p className="proof-desc">Take a photo of your medication or pill organizer as confirmation</p>
              <button className="photo-btn"><CiImageOn /> Take Photo</button>
            </div>

            <button className="mark-btn">Mark as Taken</button>
          </div>

          <div className="medication-card2">
           <CalendarView />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientPage;
