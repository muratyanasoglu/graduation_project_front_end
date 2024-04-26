// src/components/NavigatorBar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  language: 'en' | 'tr';
  toggleLanguage: () => void;
  handleLogout: () => void;
  content: {
    [key: string]: { [key: string]: string }
  };
}

const NavigatorBar: React.FC<Props> = ({ language, content, handleLogout, toggleLanguage }) => {
  return (
    <nav className="bg-white bg-opacity-75 shadow py-2 px-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/dashboard" className="flex items-center">
          <img src={`${process.env.PUBLIC_URL}/neu-logo.png`} alt="NEU Logo" className="h-10" />
        </Link>
        <div className="flex items-center space-x-2">
          {['home', 'aboutUs', 'contact', 'profile', 'settings', 'notifications', 'reservations'].map((key) => (
            <Link key={key} to={`/${key.toLowerCase()}`} className="text-sm px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors duration-200">
              {content[language][key]}
            </Link>
          ))}
          <button onClick={handleLogout} className="text-sm px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors duration-200">
            {content[language]['logOut']}
          </button>
          <button onClick={toggleLanguage} className="text-sm px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors duration-200">
            {language === 'en' ? 'TR' : 'EN'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavigatorBar;
