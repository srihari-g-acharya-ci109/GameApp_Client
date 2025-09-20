import React from 'react';
import { Transaction } from '../types';

// Transaction history table component
const TransactionsTable: React.FC = () => {
  // Mock transaction data - in real app would fetch from API
  const transactions: Transaction[] = [
    {
      id: 1,
      userId: 1,
      type: 'recharge',
      amount: 50.00,
      description: 'Account recharge',
      date: '2024-01-20'
    },
    {
      id: 2,
      userId: 1,
      type: 'purchase',
      amount: -19.99,
      description: 'Game: Super Adventure',
      date: '2024-01-21'
    },
    {
      id: 3,
      userId: 1,
      type: 'purchase',
      amount: -4.50,
      description: 'Game: Puzzle Master',
      date: '2024-01-22'
    }
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Type
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Description
            </th>
            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              Amount
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {transactions.map((transaction) => (
            <tr key={transaction.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-mono">
                {transaction.date}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {transaction.type}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {transaction.description}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-mono">
                <span className={`font-semibold ${transaction.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                  ${Math.abs(transaction.amount).toFixed(2)}
                </span>
                <span className={`text-xs ml-1 ${transaction.amount > 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {transaction.amount > 0 ? ' (Credit)' : ' (Debit)'}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsTable;