// EditInformationPage.tsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './EditInformationPage.css'; 

// Tasarım için CSS dosyasını import edin, dosya yolu doğru olmalı.

interface UserInformation {
  firstName: string;
  lastName: string;
  email: string;
  status: 'Student' | 'Academician';
  department: string;
  faculty: string;
}

interface ContentStructure {
    [key: string]: string; // Dizin imzası eklendi
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
    submit: string;
  }

interface LanguageContent {
  en: ContentStructure;
  tr: ContentStructure;
}

const EditInformationPage: React.FC = () => {
  const [language, setLanguage] = useState<'en' | 'tr'>('en');
  const [userInfo, setUserInfo] = useState<UserInformation>({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    status: 'Student',
    department: 'Computer Science',
    faculty: 'Engineering',
  });

  const navigate = useNavigate();
  const content: LanguageContent = {
    en: {
      welcome: 'Welcome',
      home: 'Home',
      aboutUs: 'About Us',
      contact: 'Contact',
      profile: 'Profile',
      settings: 'Settings',
      notifications: 'Notifications',
      reservations: 'Reservations',
      logOut: 'Log Out',
      editInfo: 'Edit Information',
      submit: 'Submit',
    },
    tr: {
      welcome: 'Hoş Geldiniz',
      home: 'Ana Sayfa',
      aboutUs: 'Hakkımızda',
      contact: 'İletişim',
      profile: 'Profil',
      settings: 'Ayarlar',
      notifications: 'Bildirimler',
      reservations: 'Rezervasyonlar',
      logOut: 'Çıkış Yap',
      editInfo: 'Bilgileri Düzenle',
      submit: 'Gönder',
    }
  };

  const handleLogout = () => navigate('/login');
  const toggleLanguage = () => setLanguage((prev) => (prev === 'en' ? 'tr' : 'en'));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form verilerini işleme ve güncelleme
    console.log(userInfo);
    // İşlem tamamlandıktan sonra kullanıcıyı profiline yönlendirin
    navigate('/profile');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target as HTMLInputElement | HTMLSelectElement;
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  return (
    <div className="edit-information-page" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/home_background_img.jpg)` }}>
      <nav className="bg-white bg-opacity-75 shadow py-2 px-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/dashboard" className="flex items-center">
            <img src={`${process.env.PUBLIC_URL}/neu-logo.png`} alt="NEU Logo" className="h-10" />
          </Link>
          <div className="flex items-center space-x-2">
            {['home', 'aboutUs', 'contact', 'profile', 'settings', 'notifications', 'reservations'].map((key) => (
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
      <div className="edit-form-container">
        <form onSubmit={handleSubmit} className="edit-form">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={userInfo.firstName}
            onChange={handleChange}
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={userInfo.lastName}
            onChange={handleChange}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={userInfo.email}
            onChange={handleChange}
          />
          <label htmlFor="status">Status</label>
          <select
            id="status"
            name="status"
            value={userInfo.status}
            onChange={handleChange}
          >
            <option value="Student">Student</option>
            <option value="Academician">Academician</option>
          </select>
          <label htmlFor="department">Department</label>
          <input
            type="text"
            id="department"
            name="department"
            value={userInfo.department}
            onChange={handleChange}
          />
          <label htmlFor="faculty">Faculty</label>
          <input
            type="text"
            id="faculty"
            name="faculty"
            value={userInfo.faculty}
            onChange={handleChange}
          />
          <button type="submit" className="submit-btn">{content[language].submit}</button>
        </form>
      </div>
    </div>
  );
};

export default EditInformationPage;
