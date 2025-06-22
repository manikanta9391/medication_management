
import { FaRegHeart } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { LuUsers } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import './home.css';

const Home = () => { 
  const navigate=useNavigate()

  return (
    <div className="container">
      <div className="header">
        <FaRegHeart className="icon" />
        <h1>Welcome to MediCare Companion</h1>
        <p className="text-muted">
          Your trusted partner in medication management. Choose your role to get started with personalized features.
        </p>
      </div>

      <div className="card-container">
        <div className="card patient">
          <FiUser />
          <h3>I'm a Patient</h3>
          <p>Track your medication schedule and maintain your health records</p>
          <ul>
            <li>Mark medications as taken</li>
            <li>Upload proof photos (optional)</li>
            <li>View your medication calendar</li>
            <li>Large, easy-to-use interface</li>
          </ul>
          <button className="btn btn-patient" onClick={() => navigate('/patient')}>Continue as Patient</button>
        </div>

        <div className="card caretaker">
          <LuUsers />
          <h3>I'm a Caretaker</h3>
          <p>Monitor and support your loved one's medication adherence</p>
          <ul>
            <li>Monitor medication compliance</li>
            <li>Set up notification preferences</li>
            <li>View detailed reports</li>
            <li>Receive email alerts</li>
          </ul>
          <button className="btn btn-caretaker" onClick={() => navigate('/caretaker')}>Continue as Caretaker</button>
        </div>
      </div>

      <p className="note">You can switch between roles anytime after setup</p>
    </div>
  );
};

export default Home;
