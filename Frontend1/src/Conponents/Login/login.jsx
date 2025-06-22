import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { useUser } from '../../UserContext/userContext';
import './login.css';

const Login = () => {
  const [formdata, setFormdata] = useState({ userid: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useUser();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormdata((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  const mutation = useMutation({
    mutationFn: async (data) => {
      const response = await axios.post('http://localhost:3000/authentication', data);
      return response.data;
    },
    onSuccess: (data) => {
      console.log('Login successful:', data);
      login({
        username: data.username,
        email: data.email,
        userid: data.userid,
        isLoggedIn: true
      });
      setError('');
      navigate('/');
    },
    onError: (error) => {
      const msg = error.response?.data?.message || 'Login failed';
      setError(msg);
    }
  });

  const submitForm = (e) => {
    e.preventDefault();
    mutation.mutate(formdata);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>
        <form onSubmit={submitForm}>
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
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter Password"
              value={formdata.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="forgot-password-link">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>

          <p className="error-text">{error}</p>
          <button className="login-btn" type="submit">Login</button>
        </form>

        <div className="signup-link">
          <p>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
