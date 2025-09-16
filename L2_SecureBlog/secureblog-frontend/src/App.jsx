import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Layout from './components/Layout';

// Minimal placeholder components for demo
const Home = () => <h2>Home page works</h2>;
const Register = () => <h2>Register page</h2>;
const Login = () => <h2>Login page</h2>;
const DashboardPage = () => <h2>Dashboard (Protected)</h2>;
const LogoutPage = () => {
  React.useEffect(() => {
    localStorage.removeItem('token');
    window.location.href = '/';
  }, []);
  return <h2>Logging out...</h2>;
};

// Simple protected route wrapper
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  if (!token) {
    window.location.href = '/login'; // redirect if not logged in
    return null;
  }
  return children;
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Wrap all routes inside Layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<LogoutPage />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
