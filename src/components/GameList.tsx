import React from 'react';
import { Game } from '../types';

// Game list component showing available games for purchase
const GameList: React.FC = () => {
  // Mock game data - in real app would fetch from API
  const games: Game[] = [
    {
      id: 1,
      title: 'Super Adventure',
      price: 19.99,
      genre: 'Adventure',
      description: 'An exciting adventure game with puzzles and exploration.'
    },
    {
      id: 2,
      title: 'Puzzle Master',
      price: 4.50,
      genre: 'Puzzle',
      description: 'Challenge your mind with 100+ unique puzzles.'
    },
    {
      id: 3,
      title: 'Racing Thunder',
      price: 15.99,
      genre: 'Racing',
      description: 'Fast-paced racing game with multiple tracks.'
    },
    {
      id: 4,
      title: 'Strategy Wars',
      price: 24.99,
      genre: 'Strategy',
      description: 'Build your empire and conquer the world.'
    }
  ];

  const handlePurchase = (game: Game) => {
    // Mock purchase logic
    console.log('Purchase attempted:', game);
    alert(`Purchasing ${game.title} for $${game.price.toFixed(2)}`);
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Title
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Genre
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Price
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Description
            </th>
            <th scope="col" className="relative px-6 py-3">
              <span className="sr-only">Action</span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {games.map((game) => (
            <tr key={game.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {game.title}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {game.genre}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                ${game.price.toFixed(2)}
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">
                {game.description}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button 
                  onClick={() => handlePurchase(game)}
                  className="text-indigo-600 hover:text-indigo-900"
                > Play now
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GameList;