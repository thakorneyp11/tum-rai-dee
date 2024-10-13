import React, { useState } from 'react';
import FilterOptions from './FilterOptions';

const Header: React.FC = () => {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <>
      <header className="flex justify-between items-center p-4 bg-white shadow-md">
        <div className="text-2xl font-bold text-primary">TumRaiDee</div>
        <button 
          className="text-2xl text-primary hover:text-secondary transition-colors duration-200 ease-in-out"
          onClick={() => setShowFilters(true)}
        >
          ☰
        </button>
      </header>
      {showFilters && <FilterOptions onClose={() => setShowFilters(false)} />}
    </>
  );
};

export default Header;
