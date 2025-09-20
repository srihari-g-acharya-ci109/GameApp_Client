// Type definitions for the game club application

export interface User {
  id: number;
  username: string;
  email: string;
  balance: number;
  isAdmin: boolean;
}

export interface Member {
  id: number;
  username: string;
  email: string;
  joinDate: string;
  balance: number;
  totalSpent: number;
}

export interface Transaction {
  id: number;
  userId: number;
  type: 'recharge' | 'purchase';
  amount: number;
  description: string;
  date: string;
}

export interface Game {
  id: number;
  title: string;
  price: number;
  genre: string;
  description: string;
}