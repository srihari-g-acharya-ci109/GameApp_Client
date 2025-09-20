import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LogIn, User } from 'lucide-react';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempted:', { username, password });
    
    // Simple mock authentication logic
    if (username === 'admin') {
      localStorage.setItem('userRole', 'admin');
      window.location.href = '/admin-dashboard';
    } else {
      localStorage.setItem('userRole', 'customer');
      window.location.href = '/dashboard';
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans antialiased flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        {/* Header and Title */}
        <div className="flex flex-col items-center justify-center mb-8">
          <div className="bg-indigo-100 p-4 rounded-full mb-4">
            <User className="w-12 h-12 text-indigo-600" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">Game Club</h1>
          <p className="mt-2 text-center text-sm text-gray-600">Sign in to your account</p>
        </div>
        
        {/* Login Form Card */}
        <div className="bg-white py-10 px-8 shadow-2xl rounded-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                Username
              </label>
              <div className="mt-1">
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter your username"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter your password"
                />
              </div>
            </div>
            
            <button 
              type="submit" 
              className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
            >
              <LogIn className="w-5 h-5 mr-2" />
              Sign In
            </button>
          </form>
        </div>
        
        {/* Signup Link */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;