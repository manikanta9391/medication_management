import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import './forgotpassword.css';
import { useNavigate } from 'react-router-dom'; 

const ForgotPassword = () => {
  const [formdata, setFormdata] = useState({
    userid: '',
    password: '',
  });
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormdata((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  const mutation = useMutation({
    mutationFn: async (data) => {
      const response = await axios.patch('http://localhost:3000/authentication', data);
      return response.data;
    },
    onSuccess: (data) => {
      setSuccess('Password updated successfully!');
      setError('');
      setTimeout(() => {
        navigate('/'); 
      }, 1000);
    },
    onError: (err) => {
      const msg = err.response?.data?.message || 'Failed to reset password';
      setError(msg);
      setSuccess('');
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formdata.password !== confirmPassword) {
      setError('Passwords do not match');
      setSuccess('');
      return;
    }
    setError('');
    setSuccess('');
    mutation.mutate(formdata);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="userid">User ID</label>
            <input
              type="text"
              id="userid"
              placeholder="Enter User ID"
              value={formdata.userid}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">New Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter New Password"
              value={formdata.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error-text">{error}</p>}
          {success && <p className="success-text">{success}</p>}
          <button className="login-btn" type="submit">Reset Password</button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
