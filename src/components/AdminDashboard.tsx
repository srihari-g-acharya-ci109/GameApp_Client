import React from 'react';
import { LogOut, Users, Shield } from 'lucide-react';

// Mock data for the Members table
const mockMembers = [
    { id: 1, name: 'Skandan', phone_number: '555-1234', balance: 150.75 },
    { id: 2, name: 'Alex', phone_number: '555-5678', balance: 50.25 },
    { id: 3, name: 'Maria', phone_number: '555-8765', balance: 200.00 },
];

const AdminDashboard: React.FC = () => {
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
            <Shield className="w-8 h-8 text-indigo-600" />
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">Admin Dashboard</h1>
              <p className="text-sm text-gray-500 mt-1">Manage your game club's members</p>
            </div>
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
      
      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto py-10 px-4">
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="p-8">
            <div className="flex items-center mb-6">
              <Users className="w-8 h-8 text-indigo-600 mr-4" />
              <h2 className="text-2xl font-semibold text-gray-900">Member Management</h2>
            </div>
            
            {/* The Members Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                ID
                            </th>
                            <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Phone Number
                            </th>
                            <th scope="col" className="px-6 py-4 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Balance
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {mockMembers.map(member => (
                            <tr key={member.id} className="hover:bg-gray-50 transition-colors duration-200">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{member.id}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{member.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{member.phone_number}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-semibold text-gray-900">
                                    ${member.balance.toFixed(2)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;