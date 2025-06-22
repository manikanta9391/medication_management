import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../UserContext/userContext'; 
import './signup.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    userid: '',
    username: '',
    email: '',
    password: '',
  });
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const { setUserInfo } = useUser(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const mutation = useMutation({
    mutationFn: async (data) => {
      const response = await axios.post('http://localhost:3000/', data);
      return response.data;
    },
    onSuccess: (data) => {
      console.log('Registration successful:', data);
      setError('');
      setUserInfo({
        isLoggedIn: true,
        userid: formData.userid,
        username: formData.username,
        email: formData.email,
      });

      navigate('/');
    },
    onError: (err) => {
      const msg = err.response?.data?.message || 'Registration failed';
      setError(msg);
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== confirmPassword) {
      setError('Passwords do not match!');
      return;
    }
    mutation.mutate(formData);
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>User ID</label>
            <input type="text" name="userid" value={formData.userid} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>User Name</label>
            <input type="text" name="username" value={formData.username} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input type="password" name="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
          </div>
          <p className="error-text">{error}</p>
          <button className="signup-btn" type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
