import React from 'react';
import { LogOut, Wallet, ShoppingCart, History, User } from 'lucide-react';
import RechargeForm from './RechargeForm';
import TransactionsTable from './TransactionsTable';
import GameList from './GameList';

// Customer dashboard with basic navigation and user info
const CustomerDashboard: React.FC = () => {
  // Mock user data - in real app would come from authentication context
  const currentUser = {
    username: 'player123',
    balance: 25.50,
  };

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    window.location.href = '/login';
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans antialiased">
      {/* Header */}
      <div className="bg-white shadow-md border-b border-gray-200 py-6 px-4">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center space-x-4">
            <User className="w-8 h-8 text-indigo-600" />
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">Customer Dashboard</h1>
              <p className="text-sm text-gray-500 mt-1">Welcome back, {currentUser.username}!</p>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <div className="text-right">
              <p className="text-sm text-gray-500">Current Balance</p>
              <p className="text-2xl font-bold text-gray-800">${currentUser.balance.toFixed(2)}</p>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center px-4 py-2 text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <LogOut className="w-5 h-5 mr-2" />
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto py-10 px-4 space-y-8">
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="p-8">
            <div className="flex items-center mb-6">
              <Wallet className="w-8 h-8 text-indigo-600 mr-4" />
              <h2 className="text-2xl font-semibold text-gray-900">Recharge Your Account</h2>
            </div>
            <RechargeForm />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="p-8">
            <div className="flex items-center mb-6">
              <ShoppingCart className="w-8 h-8 text-indigo-600 mr-4" />
              <h2 className="text-2xl font-semibold text-gray-900">Available Games</h2>
            </div>
            <GameList />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="p-8">
            <div className="flex items-center mb-6">
              <History className="w-8 h-8 text-indigo-600 mr-4" />
              <h2 className="text-2xl font-semibold text-gray-900">Your Transaction History</h2>
            </div>
            <TransactionsTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;