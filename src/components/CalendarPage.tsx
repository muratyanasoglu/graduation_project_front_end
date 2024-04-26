// src/components/CalendarPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Default stil dosyasını içe aktar
import './CalendarPage.css'; // Özelleştirilmiş stiller için

const CalendarPage = () => {
  return (
    <div className="min-h-screen" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/home_background_img.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <nav className="bg-white bg-opacity-75 shadow py-2 px-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/home" className="flex items-center">
            <img src={`${process.env.PUBLIC_URL}/neu-logo.png`} alt="NEU Logo" className="h-10" />
          </Link>
          <div className="flex items-center space-x-2">
            <Link to="/home" className="text-sm px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors duration-200">Home</Link>
           
            <Link to="/profile" className="text-sm px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors duration-200">Profile</Link>
            <Link to="/settings" className="text-sm px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors duration-200">Settings</Link>
            <Link to="/notifications" className="text-sm px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors duration-200">Notifications</Link>
            <Link to="/reservations" className="text-sm px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors duration-200">Reservations</Link>
            <button onClick={() => console.log('Logout')} className="text-sm px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors duration-200">Log Out</button>
          </div>
        </div>
      </nav>

      <div className="calendar-container">
        <Calendar />
      </div>
    </div>
  );
};

export default CalendarPage;
