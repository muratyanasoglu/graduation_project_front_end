// ProfilePage.tsx

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './ProfilePage.css';

interface ContentStructure {
  welcome: string;
  home: string;
  aboutUs: string;
  contact: string;
  profile: string;
  settings: string;
  notifications: string;
  reservations: string;
  logOut: string;
  editInfo: string;
  student: string;
  academician: string;
  department: string;
  faculty: string;
}

interface LanguageContent {
  en: ContentStructure;
  tr: ContentStructure;
}

const ProfilePage: React.FC = () => {
  const [language, setLanguage] = useState<'en' | 'tr'>('en');
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
      editInfo: 'Edit Information',
      student: 'Student',
      academician: 'Academician',
      department: 'Department',
      faculty: 'Faculty'
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
      editInfo: 'Bilgileri Düzenle',
      student: 'Öğrenci',
      academician: 'Akademisyen',
      department: 'Bölüm',
      faculty: 'Fakülte'
    }
  };

  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'en' ? 'tr' : 'en');
  };

  const handleLogout = () => {
    navigate('/login'); // Redirects to the login page on logout
  };
  const handleEditInformation = () => {
    navigate('/edit-information'); // Kullanıcıyı EditInformationPage bileşenine yönlendirir
  };

  // Example user info, replace with actual data fetching logic
  const userInfo = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    status: 'Student', // 'Academician' for other type
    department: 'Computer Science',
    faculty: 'Engineering'
  };

  return (
    
    <div className="profile-page" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/home_background_img.jpg)` }}>
      {/* Navigation Bar */}
      <nav className="bg-white bg-opacity-75 shadow py-2 px-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Replace # with actual paths */}
          <Link to="/home" className="flex items-center">
            <img src={`${process.env.PUBLIC_URL}/neu-logo.png`} alt="NEU Logo" className="h-10" />
          </Link>
          <div className="flex items-center space-x-2">
            <Link to="/home" className="text-sm px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors duration-200">{content[language].home}</Link>
            
            <Link to="/profile" className="text-sm px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors duration-200">{content[language].profile}</Link>
            <Link to="/settings" className="text-sm px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors duration-200">{content[language].settings}</Link>
            <Link to="/notifications" className="text-sm px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors duration-200">{content[language].notifications}</Link>
            <Link to="/reservations" className="text-sm px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors duration-200">{content[language].reservations}</Link>
            <button onClick={handleLogout} className="text-sm px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors duration-200">{content[language].logOut}</button>
            <button onClick={toggleLanguage} className="text-sm px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors duration-200">{language === 'en' ? 'TR' : 'EN'}</button>
          </div>
        </div>
      </nav>
      {/* User Info */}
      <div className="user-info">
        <h1>{content[language].welcome} {userInfo.firstName} {userInfo.lastName}</h1>
        <p>{userInfo.email}</p>
        <p>{content[language][userInfo.status.toLowerCase() as keyof ContentStructure]}</p>
        <p>{content[language].department}: {userInfo.department}</p>
        <p>{content[language].faculty}: {userInfo.faculty}</p>
        <button onClick={handleEditInformation}>{content[language].editInfo}</button> {/* Düzenleme butonu */}
      </div>
    </div>
  );
};

export default ProfilePage;
