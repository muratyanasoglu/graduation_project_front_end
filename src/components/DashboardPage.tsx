// src/components/DashboardPage.tsx

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './DashboardPage.css';

interface ContentStructure {
  [key: string]: string;
}

interface LanguageContent {
  en: ContentStructure;
  tr: ContentStructure;
}

const DashboardPage: React.FC = () => {
  const [language, setLanguage] = useState<'en' | 'tr'>('en');
  const username = 'John Doe';
  const navigate = useNavigate();

  const content: LanguageContent = {
    en: {
      welcome: 'Welcome,',
      home: 'Home',
      aboutUs: 'About Us',
      contact: 'Contact',
      profile: 'Profile',
      settings: 'Settings',
      notifications: 'Notifications',
      reservations: 'Reservations',
      logOut: 'Log Out',
      makeReservation: 'Make a Reservation',
      viewCalendar: 'View Calendar',
      checkSchedules: "Check Academician's Schedules",
      reserveNow: 'Reserve Now',
      viewEvents: 'View Events',
      viewSchedules: 'View Schedules'
    },
    tr: {
      welcome: 'Hoş Geldiniz,',
      home: 'Ana Sayfa',
      aboutUs: 'Hakkımızda',
      contact: 'İletişim',
      profile: 'Profil',
      settings: 'Ayarlar',
      notifications: 'Bildirimler',
      reservations: 'Rezervasyonlar',
      logOut: 'Çıkış Yap',
      makeReservation: 'Rezervasyon Yap',
      viewCalendar: 'Takvimi Görüntüle',
      checkSchedules: 'Akademisyen Programlarını Kontrol Et',
      reserveNow: 'Şimdi Rezervasyon Yap',
      viewEvents: 'Etkinlikleri Görüntüle',
      viewSchedules: 'Programları Görüntüle'
    }
  };

  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'en' ? 'tr' : 'en');
  };

  const handleLogout = () => {
    navigate('/login'); // Redirects to login page on logout
  };

  return (
    
    <div className="min-h-screen" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/home_background_img.jpg)`, backgroundSize: 'cover' }}>
      <nav className="bg-white bg-opacity-75 shadow py-2 px-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/home" className="flex items-center">
            <img src={`${process.env.PUBLIC_URL}/neu-logo.png`} alt="NEU Logo" className="h-10" />
          </Link>
          <div className="flex items-center space-x-2">
            {['home', 'profile', 'settings', 'notifications', 'reservations'].map((key) => (
              <Link key={key} to={`/${key}`} className="text-sm px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors duration-200">
                {content[language][key]}
              </Link>
            ))}
            <button onClick={handleLogout} className="text-sm px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors duration-200">
              {content[language].logOut}
            </button>
            <button onClick={toggleLanguage} className="text-sm px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors duration-200">
              {language === 'en' ? 'TR' : 'EN'}
            </button>
          </div>
        </div>
      </nav>

      <main className="py-10">
        <div className="bg-white bg-opacity-90 shadow-lg mx-auto py-4 px-6 max-w-2xl text-center rounded">
          <h1 className="text-3xl font-bold text-gray-900">{content[language].welcome} {username}!</h1>
        </div>

        <div className="max-w-6xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {['makeReservation', 'viewCalendar', 'checkSchedules'].map(key => (
            <div key={key} className="dashboard-card">
              <h2 className="card-title">{content[language][key]}</h2>
              <p className="card-description">Description for {key}...</p>
              <Link to={`/${key.toLowerCase()}`} className="card-button">Go to {key}</Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
