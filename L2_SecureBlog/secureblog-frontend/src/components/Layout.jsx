import React from 'react';
import { Link } from 'react-router-dom';

const isLoggedIn = () => !!localStorage.getItem('token');

const Layout = () => {
  return (
    <>
      <nav>
        <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none' }}>
          <li><Link to="/">Home</Link></li>

          {isLoggedIn() ? (
            <>
              <li><Link to="/dashboard">Dashboard</Link></li>
              <li><Link to="/logout">Logout</Link></li>
            </>
          ) : (
            <>
              <li><Link to="/register">Register</Link></li>
              <li><Link to="/login">Login</Link></li>
            </>
          )}
        </ul>
      </nav>

      {/* This is where all your child routes render */}
      <main style={{ padding: '1rem' }}>
        {children}
      </main>
    </>
  );
};

export default Layout;
