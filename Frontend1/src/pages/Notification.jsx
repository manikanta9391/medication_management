import { useState } from 'react';
import { FaEnvelope } from 'react-icons/fa';
import './Notification.css';

const Notification = () => {
  const [email, setEmail] = useState('caretaker@example.com');
  const [alertEnabled, setAlertEnabled] = useState(true);
  const [alertDuration, setAlertDuration] = useState('2');
  const [reminderTime, setReminderTime] = useState('20:00');

  return (
    <div className="notif-wrapper">
      <div className="notif-card">
        <h2 className="notif-title">Notification Preferences</h2>

        <div className="notif-section">
          <h4>Email Notifications</h4>
          <p className="notif-subtext">Receive medication alerts via email</p>
          <label className="notif-label">Email Address</label>
          <input
            type="email"
            className="notif-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <hr className="notif-divider" />

        <div className="notif-section">
          <h4>Missed Medication Alerts</h4>
          <p className="notif-subtext">Get notified when medication is not taken on time</p>

          <div className="notif-row">
            <label className="notif-label">Alert me if medication isn't taken within</label>
            <select
              className="notif-input"
              value={alertDuration}
              onChange={(e) => setAlertDuration(e.target.value)}
            >
              <option value="2">2 hours</option>
              <option value="6">6 hours</option>
              <option value="8">8 hours</option>
              <option value="10">10 hours</option>
            </select>
          </div>

          <div className="notif-row">
            <label className="notif-label">Daily reminder time</label>
            <input
              type="time"
              className="notif-input"
              value={reminderTime}
              onChange={(e) => setReminderTime(e.target.value)}
            />
          </div>

          <p className="notif-subtext">Time to check if today's medication was taken</p>

          <div className="notif-row notif-toggle-row">
            <span className="notif-label">Enable Alerts</span>
            <label className="notif-switch">
              <input
                type="checkbox"
                checked={alertEnabled}
                onChange={() => setAlertEnabled(!alertEnabled)}
              />
              <span className="notif-slider round"></span>
            </label>
          </div>
        </div>

        <div className="notif-section notif-preview">
          <div className="notif-preview-header">
            <FaEnvelope className="notif-icon" />
            <span>Email Preview</span>
          </div>

          <div className="notif-preview-box">
            <p className="notif-strong">Subject: Medication Alert - Eleanor Thompson</p>
            <p>Hello,</p>
            <p>This is a reminder that Eleanor Thompson has not taken her medication today.</p>
            <p>Please check with her to ensure she takes her prescribed medication.</p>
            <p className="notif-muted">Current adherence rate: 85% (5-day streak)</p>
          </div>
        </div>

        <div className="notif-btn-wrap">
          <button className="notif-save-btn">Save Notification Settings</button>
        </div>
      </div>
    </div>
  );
};

export default Notification;
