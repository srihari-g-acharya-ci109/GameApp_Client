import React, { useState } from 'react';
import { CreditCard } from 'lucide-react';

const RechargeForm: React.FC = () => {
  const [amount, setAmount] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const rechargeAmount = parseFloat(amount);
    
    if (isNaN(rechargeAmount) || rechargeAmount <= 0) {
      alert('Please enter a valid amount');
      return;
    }
    
    console.log('Recharge attempted:', rechargeAmount);
    alert(`Successfully recharged $${rechargeAmount.toFixed(2)}!`);
    setAmount('');
  };

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-inner border border-gray-200">
      <div className="flex items-center space-x-3 mb-6">
        <CreditCard className="w-6 h-6 text-gray-800" />
        <h3 className="text-lg font-semibold text-gray-900">Add Funds to Your Account</h3>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
            Amount to Recharge
          </label>
          <div className="mt-1">
            <div className="relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500">$</span>
              </div>
              <input
                type="number"
                name="amount"
                id="amount"
                step="0.01"
                min="0"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
                className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="0.00"
              />
            </div>
          </div>
        </div>
        
        <button 
          type="submit" 
          className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
        >
          Recharge Account
        </button>
      </form>
    </div>
  );
};

export default RechargeForm;