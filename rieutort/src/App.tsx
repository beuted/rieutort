import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HouseRental } from './HouseRental';

const App: React.FC = () => {
  const houseData = {
    images: [
      "https://images.hdqwalls.com/wallpapers/landscape-alpine-mountains-landscape-5k-1k.jpg",
      "https://images.pexels.com/photos/2026452/pexels-photo-2026452.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      "https://thewowstyle.com/wp-content/uploads/2015/02/6966828-beautiful-mountain-lakes.jpg"
    ]
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Rieutort</h1>
        <HouseRental {...houseData} />
      </div>
    </div>
  );
};

export default App;
