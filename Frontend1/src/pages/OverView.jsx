import './OverView.css';
import { FaRegCalendarCheck, FaBell, FaEnvelope, FaCalendarAlt } from 'react-icons/fa';

const OverView = () => {
  return (
    <div className="dashboard-container">
      <div className="top-row">
        <div className="status-card">
          <h2 className="status-heading"><FaRegCalendarCheck /> Today's Status</h2>
          <div className="status-entry">
            <div>
              <p className="medication-name">Daily Medication Set</p>
              <p className="medication-time">8:00 AM</p>
            </div>
            <span className="status-pill">Pending</span>
          </div>
        </div>

        <div className="quick-actions-card">
          <h2 className="quick-actions-heading">Quick Actions</h2>
          <div className="action-button"><FaEnvelope /> Send Reminder Email</div>
          <div className="action-button"><FaBell /> Configure Notifications</div>
          <div className="action-button"><FaCalendarAlt /> View Full Calendar</div>
        </div>
      </div>

      <div className="progress-card">
        <h2 className="progress-heading">Monthly Adherence Progress</h2>
        <p className="progress-label">Overall Progress</p>
        <div className="progress-bar-wrapper">
          <div className="progress-bar-fill" style={{ width: '85%' }}></div>
        </div>
        <div className="progress-details">
          <div className="progress-item taken">
            <strong>22 days</strong>
            <span>Taken</span>
          </div>
          <div className="progress-item missed">
            <strong>3 days</strong>
            <span>Missed</span>
          </div>
          <div className="progress-item remaining">
            <strong>5 days</strong>
            <span>Remaining</span>
          </div>
        </div>
        <span className="progress-percent">85%</span>
      </div>
    </div>
  );
};

export default OverView;
