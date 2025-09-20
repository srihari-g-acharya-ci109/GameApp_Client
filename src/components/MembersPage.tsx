import React from 'react';
import { Member } from '../types';

// Members table component for admin dashboard
const MembersPage: React.FC = () => {
  // Mock members data - in real app would fetch from API
  const members: Member[] = [
    {
      id: 1,
      username: 'player123',
      email: 'player123@email.com',
      joinDate: '2024-01-15',
      balance: 25.50,
      totalSpent: 74.99
    },
    {
      id: 2,
      username: 'gamer456',
      email: 'gamer456@email.com',
      joinDate: '2024-02-03',
      balance: 12.00,
      totalSpent: 45.98
    },
    {
      id: 3,
      username: 'casual789',
      email: 'casual789@email.com',
      joinDate: '2024-01-28',
      balance: 0.00,
      totalSpent: 29.99
    }
  ];

  return (
    <div>
      <h3>All Members</h3>
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Join Date</th>
            <th>Current Balance</th>
            <th>Total Spent</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.id}>
              <td>{member.id}</td>
              <td>{member.username}</td>
              <td>{member.email}</td>
              <td>{member.joinDate}</td>
              <td>${member.balance.toFixed(2)}</td>
              <td>${member.totalSpent.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MembersPage;