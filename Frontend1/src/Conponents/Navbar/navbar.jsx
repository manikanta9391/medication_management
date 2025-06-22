import { useState } from 'react';
import { FiUser } from "react-icons/fi";
import { LuUsers } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const [isCaretakerView, setIsCaretakerView] = useState(false); // false = patient, true = caretaker

  const handleSwitch = () => {
    setIsCaretakerView(!isCaretakerView);
    if (isCaretakerView) {
      navigate('/patient');
    } else {
      navigate('/careTaker');
    }
    
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <div className="icon2">M</div>
        <div>
          <span className="title">MediCare Companion</span><br />
          <span className="view1">{isCaretakerView ? 'Caretaker View' : 'Patient View'}</span>
        </div>
      </div>

      <div className='change-view'>
        <button className='switch' onClick={handleSwitch}>
          <div>{isCaretakerView ? <FiUser /> : <LuUsers />}</div>
          <span>Switch to {isCaretakerView ? 'Patient' : 'Caretaker'}</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
