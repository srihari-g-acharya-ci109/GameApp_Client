import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import CustomerDashboard from './components/CustomerDashboard';
import AdminDashboard from './components/AdminDashboard';

// Main app component with routing configuration
function App() {
  // Simple authentication check using localStorage
  const userRole = localStorage.getItem('userRole');

  return (
    <Router>
      <div style={{ margin: '20px' }}>
        <Routes>
          {/* Public routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          
          {/* Protected routes based on user role */}
          <Route 
            path="/dashboard" 
            element={
              userRole === 'customer' ? (
                <CustomerDashboard />
              ) : (
                <Navigate to="/login" replace />
              )
            } 
          />
          
          <Route 
            path="/admin-dashboard" 
            element={
              userRole === 'admin' ? (
                <AdminDashboard />
              ) : (
                <Navigate to="/login" replace />
              )
            } 
          />
          
          {/* Default route - redirect to login */}
          <Route path="/" element={<Navigate to="/login" replace />} />
          
          {/* Catch-all route for unknown paths */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;