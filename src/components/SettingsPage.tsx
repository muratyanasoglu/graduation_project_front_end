// SettingsPage.tsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

interface ContentStructure {
  settings: string;
  changePassword: string;
  deleteAccount: string;
  submit: string;
  confirmDeleteMsg: string;
  yes: string;
  no: string;
  logOut: string;
}

interface LanguageContent {
  en: ContentStructure;
  tr: ContentStructure;
}

const SettingsPage: React.FC = () => {
  const [language, setLanguage] = useState<'en' | 'tr'>('en');
  const [password, setPassword] = useState('');
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const navigate = useNavigate();

  const content: LanguageContent = {
    en: {
      settings: 'Settings',
      changePassword: 'Change Password',
      deleteAccount: 'Delete Account',
      submit: 'Submit',
      confirmDeleteMsg: 'Are you sure you want to delete the account?',
      yes: 'Yes',
      no: 'No',
      logOut: 'Log Out',
    },
    tr: {
      settings: 'Ayarlar',
      changePassword: 'Şifre Değiştir',
      deleteAccount: 'Hesabı Sil',
      submit: 'Gönder',
      confirmDeleteMsg: 'Hesabınızı silmek istediğinizden emin misiniz?',
      yes: 'Evet',
      no: 'Hayır',
      logOut: 'Çıkış Yap',
    }
  };

  const handleLogout = () => {
    // Implement logout logic here
    navigate('/login');
  };

  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'en' ? 'tr' : 'en');
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmitPasswordChange = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Implement password change logic here
    navigate('/login');
  };

  const handleDeleteAccount = () => {
    setShowConfirmDelete(true);
  };

  const handleConfirmDeleteAccount = () => {
    // Implement account deletion logic here
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-cover" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/home_background_img.jpg)` }}>
      {/* Navigation Bar */}
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
      <button onClick={handleLogout} className="text-sm px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors duration-200">Log Out</button>
      <button onClick={toggleLanguage} className="text-sm px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors duration-200">{language === 'en' ? 'TR' : 'EN'}</button>
    </div>
  </div>
</nav>
      {/* Settings Content */}
      <div className="container mx-auto p-4">
      {/* <h1 className="text-2xl font-semibold text-center mb-6 text-gray-900">{content[language].settings}</h1> */}
      <br></br><br></br><br></br>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          {/* Password Change Form */}
          <form onSubmit={handleSubmitPasswordChange} className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">{content[language].changePassword}</label>
              <input
  type="password"
  id="password"
  name="password"
  value={password}
  onChange={handleChangePassword}
  className="mt-1 block w-full rounded-md border border-black shadow-sm focus:border-black focus:ring focus:ring-black"
/>
            </div>
            <div className="flex justify-end">
              <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                {content[language].submit}
              </button>
            </div>
          </form>
          {/* Account Deletion Section */}
          <div className="mt-6">
            <button onClick={handleDeleteAccount} className="text-red-600 hover:text-red-700 transition-colors duration-200">
              {content[language].deleteAccount}
            </button>
            {showConfirmDelete && (
              <div className="mt-4">
                <p className="text-gray-600">{content[language].confirmDeleteMsg}</p>
                <div className="flex justify-end space-x-2">
                  <button onClick={handleConfirmDeleteAccount} className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none transition-colors duration-200">
                    {content[language].yes}
                  </button>
                  <button onClick={() => setShowConfirmDelete(false)} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none transition-colors duration-200">
                    {content[language].no}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
