import React, { useState } from 'react';
import API from '../services/api';
import { useNavigate } from 'react-router-dom';
import './Register.css'; // Make sure this path is correct


const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    const navigate = useNavigate(); // for redirecting after success
  
    // Function will go here later
    const handleRegister = async (e) => {
        e.preventDefault();
        setError(''); // Clear any previous error
      
        try {
            const response = await API.post('/auth/register', { email, password });
      
// ✅ Read token from response
const token = response.data.token;

// ✅ Save token in localStorage
localStorage.setItem('token', token);
setSuccess('Registration complete'); // ✅ Success message
  setError(''); // Clear error if any
          
            navigate('/dashboard'); // Redirect after success
          
        } catch (err) {
            console.error('Registration error:', err); // ✅ Debugging

            // ✅ Check if backend sent an error message
            if (err.response && err.response.data && err.response.data.message) {
              setError(err.response.data.message);
            } else {
              setError('Registration failed. Please try again.');
            }
            setSuccess(''); // Clear success on error
        }
      };
      

    return (


      <div className="register-container">
        <h2>Register</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleRegister}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Register</button>
        </form>
      </div>
    );
  };


  export default Register;

  